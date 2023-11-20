// 1.
// function sum(array) {
//   let sum = 0;
//   try {
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//   } catch (e) {
//     if (e instanceof TypeError) console.error(e.message)
//   }
//   return sum;
// }

// let res = sum(null);
// console.log(res);

// 2.
// Your code here
// function sayName(name) {
//   if (typeof name !== "string") {
//     throw new TypeError("Invalid name! Must be a string!")
//   }
//   console.log(name)
// }
// // tests
// try {
//   sayName("Alex");
//   sayName(1);
// } catch (error) {
//   console.log(error.message)
// }

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  // greet()
  // greet(null)
  // greet(undefined)
  greet(0)
} catch (e) {
  // console.log(e.name, e.message)
  console.log("Hello World")
}
