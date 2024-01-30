// class names are Capitalized
class Car {
  constructor(name, make, model) {
    this.name = name;
    this.make = make;
    this.model = model;
    Car.numCars += 1;
  }
  // * instance method
  getInfo() {
    return `I wish I had a ${this.make} ${this.name} ${this.model}`;
  }

  // * static method
  static getCars(...cars) {
    return cars.map((car) => car.name);
  }

  // * static variable
  static numCars = 0;
}

// instance of Class usually Capitalized
const Challenger = new Car("Challenger", "Dodge", "Hellcat");
console.log(Challenger);
const Mustang = new Car("Mustang", "Ford", "Shelby");
console.log(Mustang);

// calling instance methods
console.log(Challenger.getInfo());
console.log(Mustang.getInfo());

// can use instanceOf to check if it is instance of a class
console.log(Mustang instanceof Car);

// calling a static method on the class itself
const carNames = Car.getCars(Challenger, Mustang);
console.log(carNames);
// calling a static variable of the class itself
console.log(Car.numCars);
