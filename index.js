const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

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
        message: "What's your employee name?",
        name: 'employeeName',
        type: 'input',
        default: 'nameless worker'
    },
    {
        message: "What's your employee ID?",
        name: 'employeeID',
        type: 'input',
        default: '000-00'
    },
    {
        message: "What's your employee email?",
        name: 'employeeEmail',
        type: 'input',
        default: "worker@work.com"
    },
    {
        // when: (answers) => answers.employee === 'Engineer',
        message: "What is the GitHub name?",
        name: 'githubName',
        type: 'input',
        default: '@some-github-name'
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
        message: "What's your employee name?",
        name: 'employeeName',
        type: 'input',
        default: 'nameless worker'
    },
    {
        message: "What's your employee ID?",
        name: 'employeeID',
        type: 'input',
        default: '000-00'
    },
    {
        message: "What's your employee email?",
        name: 'employeeEmail',
        type: 'input',
        default: "worker@work.com"
    },
    {
        message: "What's your school name?'",
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
function makeEmployee (employeeQuestions, employeeType) {
inquirer.prompt (employeeQuestions).then(employee => {
    // employees.push(employee);
    if (employeeType === 'Engineer') {
        const engineer = new Engineer ()
       engineers.push(engineer) 
    }else if (employeeType === 'Intern') {
        const intern = new Intern ()
        interns.push(intern)
    }
    console.log(engineers, interns);
    if (employee.nextEmployee === 'Engineer') {
        makeEmployee(questionsEngineer, "Engineer")
    } else if (employee.nextEmployee === 'Intern') {
        // makeEmployee(questionsIntern, "Intern");
    } else {
        console.log('no more employees')
    }
})
//add .catch

}

// answers get push to these arrays
const engineers = [];
const interns = [];

// inquirer to ask the questions
function init() {
    console.log('im hit');
    inquirer.prompt(questionsManager).then(managerAnswers => {
        console.log('---- this is the response from the users ----', managerAnswers);
        // employees.push(managerAnswers);
        const manager = new Manager (managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNum);
        // const markdown = generateMarkdown(answers);
        // console.log('--- log this here ---', markdown);
        // writeToFile('generated_readme/README', markdown);
        if (managerAnswers.nextEmployee === 'Engineer') {
            makeEmployee(questionsEngineer, "Engineer")
 
        }  else if (managerAnswers.nextEmployee === 'Intern') {
            // makeEmployee(questionsIntern, "Intern")
        } else {
            console.log('no more employees')
        }
        // console.log(employees);
    });
};

// create write to file for each person group
// const jess = new Manager('Jess', 1, '123-123-1234');
// fs.writeFile('dist/team.html', jess.generateCard(), (err) => {
//     if (err) throw err;
// });

// Function call to initialize app
init();