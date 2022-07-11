const { expect } = require('expect');
const { it } = require('jest-circus');
const { describe } = require('yargs');
const Manager = require('../lib/Manager');
const managerTest = require('../lib/Manager');

describe('teamMaker', () => {
    describe('managerTest', () => {
        // it("should return an office number in the form of a string", () => {
        //     const manager = new Manager('Max', "007", "max@work.com", "00");

        //     expect(manager.name).toEqual("Max");
        //     expect(manager.id).toEqual("007");
        //     expect(manager.email).toEqual("max@work.com");
        //     expect(manager.officeNum).toEqual("00");
        // });

        it("should return an office number", () => {
            const newManager = managerAnswers;

            expect("officeNum" in newManager).toEqual(true);
        });


    });
});