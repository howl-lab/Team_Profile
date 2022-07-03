const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create questions
const questionsMain = [
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
        name: 'employee',
        type: 'list',
        choices: [
            'Engineer',
            'Intern',
            'No thanks'
        ]
    },
    {
        when: (answers) => answers.employee === 'Engineer',
        message: "What is the GitHub name?",
        name: 'githubName',
        type: 'input',
        default: '@some-github-name'
    },
    {
        when: (answers) => answers.employee === 'Intern',
        message: "What school do they hail from?",
        name: 'school',
        type: 'input',
        default: 'some school'
    },

];

const questionsMore = [
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
]

// inquirer to ask the questions
function init() {
    console.log('im hit');
    inquirer.prompt(questions).then(answers => {
        console.log('---- this is the response from the users ----', answers);
        // const markdown = generateMarkdown(answers);
        // console.log('--- log this here ---', markdown);
        // writeToFile('generated_readme/README', markdown);
    });
};


// create write to file for each person group
const jess = new Manager('Jess', 1, '123-123-1234');
fs.writeFile('dist/team.html', jess.generateCard(), (err) => {
    if (err) throw err;
});

// Function call to initialize app
init();