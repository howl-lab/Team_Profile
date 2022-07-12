const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('intern role creation', () => {
        it('should create a new instance of intern object with name, id, email, and school', () => {
            const newIntern = new Intern('Steve', 66, 'email', 'university');
            expect(newIntern).toBeInstanceOf(Intern);
            expect(newIntern.name).toBe('Steve');
            expect(newIntern.id).toBe(66);
            expect(newIntern.email).toBe('email');
            expect(newIntern.school).toBe('university');
        });
    });
});