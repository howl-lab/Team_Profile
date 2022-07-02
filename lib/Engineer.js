const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    };

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    };

    generateCard() {
        return `<h1>${this.name}</h1>`
    }
};

module.exports = Engineer;