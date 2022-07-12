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
        <h4 class="text-primary">Engineer</h4>
        <div class="details">
        <p>id: ${this.id}</p>
        <p><a href="mailto:${this.email}">${this.email}</a></p>
        <p>github.com/${this.github}</p>
        </div>
        </div>
        `;
    }
};

module.exports = Engineer;