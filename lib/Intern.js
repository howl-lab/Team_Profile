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
        <div class="card">
        <h1>${this.name}</h1>
        <h4 class="text-warning">Intern</h4>
        <div class="details">
        <p>id: ${this.id}</p>
        <p><a href="mailto:${this.email}">${this.email}</a></p>
        <p>${this.school}</p>
        </div>
        </div>
        `;
    }
};

module.exports = Intern;