const Employee = require(`./employee`);

const johnWick = new Employee("John Wick", "Dog Lover");

setTimeout(johnWick.sayName, 2000); // we lose context

let sayNameBound = johnWick.sayName.bind(johnWick);

setTimeout(sayNameBound, 1000); // we keep context

setTimeout(johnWick.sayOccupation.bind(johnWick), 500); // also keep context
