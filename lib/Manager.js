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
        <h1>${this.name}</h1>
        <h2>Manager</h2>
        <div>
        <p>${this.id}</p>
        <p>${this.email}</p>
        <p>${this.officeNum}</p>
        </div>
        `;
    
    }
};

module.exports = Manager;