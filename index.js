const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// manager, engineer, intern answers get push to this array
const employees = [];

// questions for Manager
const questionsManager = [
    {
        message: "What's your name?",
        name: 'managerName',
        type: 'input',
        default: 'The Boss'
    },
    {
        message: "What's your employee ID?",
        name: 'managerID',
        type: 'input',
        default: '007'
    },
    {
        message: "What's your email?",
        name: 'managerEmail',
        type: 'input',
        default: "boss@work.com"
    },
    {
        message: "What is the office number?",
        name: 'officeNum',
        type: 'number',
        default: "00"
    },
    {
        message: "Would you like to add:",
        name: 'nextEmployee',
        type: 'list',
        choices: [
            'Engineer',
            'Intern',
            'No thanks'
        ]
    },
];

// questions for Engineer
const questionsEngineer = [
    {
        message: "Engineer's name?",
        name: 'employeeName',
        type: 'input',
        default: 'Hack'
    },
    {
        message: "Engineer's ID?",
        name: 'employeeID',
        type: 'input',
        default: '010'
    },
    {
        message: "Engineer's email?",
        name: 'employeeEmail',
        type: 'input',
        default: "hack@work.com"
    },
    {
        message: "Engineer's GitHub name?",
        name: 'githubName',
        type: 'input',
        default: 'notahacker'
    },
    {
        message: "Would you like to add:",
        name: 'nextEmployee',
        type: 'list',
        choices: [
            'Engineer',
            'Intern',
            'No thanks'
        ]
    },
];

// questions for Intern
const questionsIntern = [
    {
        message: "Intern's name?",
        name: 'employeeName',
        type: 'input',
        default: 'Newbie'
    },
    {
        message: "Intern's ID?",
        name: 'employeeID',
        type: 'input',
        default: '123'
    },
    {
        message: "Intern's email?",
        name: 'employeeEmail',
        type: 'input',
        default: "newbie@work.com"
    },
    {
        message: "Intern's school?",
        name: 'schoolName',
        type: 'input',
        default: "University of life"
    },
    {
        message: "Would you like to add:",
        name: 'nextEmployee',
        type: 'list',
        choices: [
            'Engineer',
            'Intern',
            'No thanks'
        ]
    },
];

// function to ask follow up questions for Engineer or Intern
function makeEmployee(employeeQuestions, employeeType) {
    inquirer.prompt(employeeQuestions).then(employee => {
        if (employeeType === 'Engineer') {
            const engineer = new Engineer(employee.employeeName, employee.employeeID, employee.employeeEmail, employee.githubName);
            employees.push(engineer)
        } else if (employeeType === 'Intern') {
            const intern = new Intern(employee.employeeName, employee.employeeID, employee.employeeEmail, employee.schoolName)
            employees.push(intern)
        }
        if (employee.nextEmployee === 'Engineer') {
            makeEmployee(questionsEngineer, "Engineer")
        } else if (employee.nextEmployee === 'Intern') {
            makeEmployee(questionsIntern, 'Intern')
        } else {
            console.log('no more employees');
            fs.writeFileSync(path.join(__dirname, 'dist/team.html'), generateHTML(employees), (err) => {
                if (err) throw err;
            });
        };
    })
        .catch((error) => {
            console.error(error);
        });

};


// inquirer to ask the questions for manager
//manager can add an extra employee of engineer or intern
//or none which will end the prompts and call the fs writeFileSync function
// Manager's answers will be pushed to an employees array
function init() {
    console.log('im hit');
    inquirer.prompt(questionsManager, "Manager").then(managerAnswers => {
        console.log('---- this is the response from the users ----', managerAnswers);
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNum);
        employees.push(manager);
        if (managerAnswers.nextEmployee === 'Engineer') {
            makeEmployee(questionsEngineer, 'Engineer')
        } else if (managerAnswers.nextEmployee === 'Intern') {
            makeEmployee(questionsIntern, "Intern")
        } else {
            console.log('no more employees');
            fs.writeFileSync(path.join(__dirname, 'dist/team.html'), generateHTML(employees), (err) => {
                if (err) throw err;
            });
        };
    });
};

//function to generate HTML elements (inside)
function generateHTML(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">    
    <link rel="stylesheet" href="./style.css"/>
</head>
<body>
<div class="header">
<h1 class="teamName">The A Team 🚀</h1>
</div>

    <div class="teamProfile">
    ${generateCards(employees)}
    </div>
</body>

</html>    
    `
};

//generate cards for each employee item
function generateCards(employees) {
    let htmlString = '';
    employees.forEach(employee => {
        htmlString += employee.generateCard()
    });
    return htmlString;
};

// Function call to initialize app
init();

