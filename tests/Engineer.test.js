const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('object creation', () => {
        it('should create a new instance of engineer object with name, id, email, and GitHub', () => {
            const newEngineer = new Engineer('Dustin', 33, 'email', 'github');
            expect(newEngineer).toBeInstanceOf(Engineer);
            expect(newEngineer.name).toBe('Dustin');
            expect(newEngineer.id).toBe(33);
            expect(newEngineer.email).toBe('email');
            expect(newEngineer.github).toBe('github');
        });
    });
});