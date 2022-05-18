const Manager = require ("../lib/Manager");


describe("Manager", () => {
    it ("Should return Manager Office number", () => {
        const testOfficenumber = 82165021;
        const manager = ("Apricat", 5 ,"Tabby@email.com", testOfficenumber);
        expect(manager.officeNumber).toBe(testOfficenumber)
    });
    it ("Should return Manager form getRole ()", () =>{
        const testRole = "Manager"
        const manager = new Manager ("Apricat", 5 ,"Tabby@email.com", 82165021);
        expect(manager.getRole).toBe(testRole)
    });
    it ("Should return office Number from getOffice()", () => {
        const testOfficenumber = 82165021;
        const manager = new Manager ("Apricat", 5 ,"Tabby@email.com", testOfficenumber);
        expect(manager.getOfficeNumber()).toBe(testOfficenumber);
    })
})