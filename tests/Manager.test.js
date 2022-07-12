const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('object creation', () => {
        it('should create a new instance of manager object with name, id, email, and office number', () => {
            const newManager = new Manager('Eleven', 99, 'email', '01');
            expect(newManager).toBeInstanceOf(Manager);
            expect(newManager.name).toBe('Eleven');
            expect(newManager.id).toBe(99);
            expect(newManager.email).toBe('email');
            expect(newManager.officeNum).toBe('01');
        });
    });
});