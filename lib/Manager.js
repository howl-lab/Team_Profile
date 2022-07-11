const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    };

    getRole() {
        return 'Manager';
    };

    generateCard() {
        return `
        <div class="card">
        <h1>${this.name}</h1>
        <h4 class="text-danger">Manager</h4>
        <div class="details">
        <p>id: ${this.id}</p>
        <p>${this.email}</p>
        <p>office: ${this.officeNum}</p>
        </div>
        </div>
        `;
    
    }
};

// Function call to initialize app
module.exports = Manager;