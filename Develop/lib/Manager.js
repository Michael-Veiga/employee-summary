// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

// extends keyword indicates that a class is inheristed from another class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //   super is the classes parent object, which in this instance is the employee objects
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
