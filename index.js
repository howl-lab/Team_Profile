const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create questions
const questions = [
    {
        message: "What's your name?",
        name: 'name',
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
        message: "What's your email?",
        name: 'email',
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
        message: "What are you here?",
        name: 'position',
        type: 'list',
        choices: [
            'Employee',
            'Manager'
        ]
    },
    {
        when: (answers) => answers.position === 'Manager',
        message: "Would you like to:",
        name: 'actionList',
        type: 'list',
        choices: [
            'add an engineer',
            'add an intern',
            'finish up please'
        ]
    },
    {
        when: (answers) => answers.actionList === 'add an engineer',
        message: "What is the GitHub name?",
        name: 'githubName',
        type: 'input',
        default: '@some-github-name'
    },
    {
        when: (answers) => answers.actionList === 'add an intern',
        message: "What school do they hail from?",
        name: 'school',
        type: 'input',
        default: 'some school'
    },
];


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
// const jess = new Manager('Jess', 1, '123-123-1234');
// fs.writeFile('dist/team.html', jess.generateCard(), (err) => {
//     if (err) throw err;
// });

// Function call to initialize app
init();