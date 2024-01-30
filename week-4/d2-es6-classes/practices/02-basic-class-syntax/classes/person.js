class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.firstName} ${this.lastName}, and I am ${this.age} years old.`;
  }

  static introducePeople(people) {
    if (!Array.isArray(people)) {
      console.log("introducePeople only takes an array as an argument");
      return;
    }
    for (let person of people) {
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances");
        return;
      }
    }
    people.forEach((person) => person.introduce());
  }
}

const Brandon = new Person("brandon", "larson", "28");
// console.log(Brandon);
// console.log(Brandon.introduce());
Person.introducePeople();
Person.introducePeople([Brandon, 12]);
const Scott = new Person("scott", "feichter", "old");
Person.introducePeople([Brandon, Scott]);

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
