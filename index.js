const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// let employeesCard = $('.employeesCard');

// answers get push to these arrays
const employees = [];

// questions for Manager
const questionsManager = [
    {
        message: "What's your name?",
        name: 'managerName',
        type: 'input',
        default: 'nameless worker'
    },
    {
        message: "What's your employee ID?",
        name: 'managerID',
        type: 'input',
        default: '000-00'
    },
    {
        message: "What's your email?",
        name: 'managerEmail',
        type: 'input',
        default: "worker@work.com"
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
        default: 'tech person'
    },
    {
        message: "Engineer's ID?",
        name: 'employeeID',
        type: 'input',
        default: '000'
    },
    {
        message: "Engineer's email?",
        name: 'employeeEmail',
        type: 'input',
        default: "eng@work.com"
    },
    {
        message: "Engineer's GitHub name?",
        name: 'githubName',
        type: 'input',
        default: '@githubname'
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
]

// questions for Intern
const questionsIntern = [
    {
        message: "Intern's name?",
        name: 'employeeName',
        type: 'input',
        default: 'intern person'
    },
    {
        message: "Intern's ID?",
        name: 'employeeID',
        type: 'input',
        default: '000'
    },
    {
        message: "Intern's email?",
        name: 'employeeEmail',
        type: 'input',
        default: "intern@work.com"
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
]

// function to ask follow up questions to Engineer and Intern
function makeEmployee(employeeQuestions, employeeType) {
    inquirer.prompt(employeeQuestions).then(employee => {
        // employees.push(employee);
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
            makeEmployee(questionsIntern, "Intern")
        } else {
            console.log('no more employees');
            fs.writeFileSync(path.join(__dirname, 'dist/team.html'), generateHTML(employees), (err) => {
                if (err) throw err;
            })
        }
    })
        .catch((error) => {
            console.error(error);
        });

}


// inquirer to ask the questions
function init() {
    console.log('im hit');
    inquirer.prompt(questionsManager, "Manager").then(managerAnswers => {
        console.log('---- this is the response from the users ----', managerAnswers);
        const manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNum);
        employees.push(manager);
        if (managerAnswers.nextEmployee === 'Engineer') {
            makeEmployee(questionsEngineer, "Engineer")

        } else if (managerAnswers.nextEmployee === 'Intern') {
            makeEmployee(questionsIntern, "Intern")
        } else {
            console.log('no more employees');
            fs.writeFileSync(path.join(__dirname, 'dist/team.html'), generateHTML(employees), (err) => {
                if (err) throw err;
            })
        }
    });
};

//add link to css style sheet or bootstrap
function generateHTML(employees) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link src="./style.css"/>
</head>
<body>
    <div class="employeesCard">
    ${generateCards(employees)}
    </div>
</body>

</html>    
    `
}

function generateCards(employees) {
    let htmlString = '';
    employees.forEach(employee => {
        htmlString += employee.generateCard()
    });
    return htmlString;
}


// employees.forEach ((employee) => {
//     employeesCard.push(generateCard);
// });

// Function call to initialize app
init();











    // const markdown = generateMarkdown(answers);
        // console.log('--- log this here ---', markdown);
        // writeToFile('generated_readme/README', markdown);

// create write to file for each person group
// const jess = new Manager('Jess', 1, '123-123-1234');
// fs.writeFile('dist/team.html', jess.generateCard(), (err) => {
//     if (err) throw err;
// });

