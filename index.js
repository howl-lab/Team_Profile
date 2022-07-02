const fs = require('fs');
const inquirer = require('inquire');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// create questions


// create write to file for each person group
const jess = new Manager('Jess', 1, '123-123-1234')
fs.writeFile('dist/team.html', jess.generateCard(), (err) => {
    if(err) throw err;
});