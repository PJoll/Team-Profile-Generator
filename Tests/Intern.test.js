const Intern = require ("../lib/Intern");


describe("Intern", () => {
    it ("Should return Intern School", () => {
        const testSchool = "University of Adelaide";
        const intern    = new Intern("Apricat", 5 ,"Tabby@email.com", testSchool);
        expect(intern.school).toBe(testSchool);
    })
    it ("Should return Intern from getRole()", () => {
        const testRole = "Intern";
        const intern  = new Intern ("Apricat", 5 ,"Tabby@email.com", testRole);
        expect(intern.school).toBe(testRole)
    })
    it ("Should return Intern School from getSchool()", () => {
        const testSchool = "University of Adelaide";
        const intern = new Intern("Apricat", 5 ,"Tabby@email.com", testSchool);
        expect(intern.school).toBe(testSchool)
    })
})