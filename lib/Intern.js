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
        return `
        <h1>${this.name}</h1>
        <h2>Intern</h2>
        <div>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.school}</p>
        </div>
        `;
    }
};

module.exports = Intern;