
const Employee =require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
      super(name, id, email);
      this.officeNumber = officeNumber;
      this.role = "Manager"
    }
    
    get getOfficeNumber() {
        return this.officeNumber
    }
    get getRole(){
      return this.role;
    }
   
}

module.exports = Manager;