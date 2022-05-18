const Intern = require ("../lib/Intern");


describe("Intern", () => {
    it ("Should return Intern School", () => {
        const testSchool = "University of Adelaide";
        const Intern    = new Engineer("Apricat", 5 ,"Tabby@email.com", testSchool);
        expect(Intern.school).toBe(testSchool);
    })
    it ("Should return Intern from getRole()", () => {
        const testRole = "Intern";
        const Intern  = new Intern ("Apricat", 5 ,"Tabby@email.com", testRole);
        expect(Intern.getRole()).toBe(testRole)
    })
    it ("Should return Intern School from getSchool()", () => {
        const testSchool = "University of Adelaide";
        const Intern = new Intern("Apricat", 5 ,"Tabby@email.com", testSchool);
        expect(Intern.getSchool()).toBe(testSchool)
    })
})