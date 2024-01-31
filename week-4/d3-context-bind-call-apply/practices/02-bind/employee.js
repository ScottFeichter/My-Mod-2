class Employee {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }
  sayName() {
    console.log(`${this.name} says hello`);
  }
  sayOccupation() {
    console.log(`${this.name} is ${this.occupation}`);
  }
}

module.exports = Employee;


