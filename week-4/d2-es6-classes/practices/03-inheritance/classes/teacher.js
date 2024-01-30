const Person = require("./person");

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  introduce() {
    return `Hello. I am ${this.firstName} ${this.lastName} and I have been
    teaching for ${this.yearsOfExperience} years`;
  }
  static combinedYearsOfExperience(teachers) {
    return teachers.reduce((acc, curVal) => acc + curVal.yearsOfExperience, 0);
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
