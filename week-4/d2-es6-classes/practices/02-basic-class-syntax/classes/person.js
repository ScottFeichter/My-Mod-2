// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople (peopleArr) {
    // console.log(peopleArr, " ===> peopleArr")
    // console.log(Array.isArray(peopleArr))
    if (!Array.isArray(peopleArr)) {
      return console.log("introducePeople only takes an array as an argument.")

    }

    for (let person of peopleArr) {
      if (!(person instanceof Person)) {
        console.log("All items in array must be Person class instances.")
        return
      }
    }

    peopleArr.forEach(person => {
      person.introduce()

    })

  }
}
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
