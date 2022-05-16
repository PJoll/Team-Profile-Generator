const Employee = require ("../lib/Employee");

describe("Employee", () => {
    it ("Should return Employee name", () => {
        const name = "willow";
        const e = new Employee(name);
        expect(e.name).toBe (name);  
    });
    it ("Should return Employee Id", () => {
        const testId = 5;
        const e = new Employee("Apricat", testId);
        expect(e.id).toBe(testId); 
    });
    it ("Should return Employee Email", () => {
        const testEmail = "Tabby@email.com";
        const e = new Employee("Apricat", 5 ,testEmail );
        expect(e.email).toBe(testEmail);  
    })
})