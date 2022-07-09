const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    };

    getRole() {
        return 'Engineer';
    };

    // add class
    generateCard() {
        return `
        <div class="card">
        <h1>${this.name}</h1>
        <h2>Engineer</h2>
        <div>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.github}</p>
        </div>
        </div>
        `;
    }
};

module.exports = Engineer;