const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    };

    getRole() {
        return 'Intern';
    };

    generateCard() {
        return `<h1>${this.name}</h1>`
    }
};

module.exports = Intern;