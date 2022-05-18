const Engineer = require ("../lib/Engineer");

describe ("Engineer",() => {
    it ("Should return Engineer Github profile", () => {
        const testGit = "githubTab";
        const eng = new Engineer("Apricat", 5 ,"Tabby@email.com",testGit);
        expect(eng.github).toBe(testGit);
    });
    it("Should return Engineer from getRole()", () => {
        const testRole = "Engineer";
        const eng = new Engineer("Apricat", 5 ,"Tabby@email.com", "githubTab");
        expect(eng.getRole()).toBe(testRole)
    })
    it("Should return Engineer github from getGithub", () => {
        const testGit = "githubTab";
        const eng = new Engineer("Apricat", 5 ,"Tabby@email.com", testGit)
        expect(eng.getGithub()).toBe(testGit);
    })
    });
