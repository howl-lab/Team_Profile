const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('object creation', () => {
        it('should create a new instance of employee object with name, id, and email', () => {
            const newEmployee = new Employee('Hawkin', 11, 'email');
            expect(newEmployee).toBeInstanceOf(Employee);
            expect(newEmployee.name).toBe('Hawkin');
            expect(newEmployee.id).toBe(11);
            expect(newEmployee.email).toBe('email');
        });
    });
});

// describe('Methods return correct data:', () => {
//     it
// })