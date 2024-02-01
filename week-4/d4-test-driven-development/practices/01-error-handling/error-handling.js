// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(error.name + ": " + error.message);
      console.log("HEY DUMMY: Argument must be array. Returning 0.");
    } else {
      throw error;
    }
  }
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
// tests

function sayName(name) {
  if (typeof name !== "string") {
    throw new TypeError(`Invalid name! Must be a string!`);
  }
  console.log(name);
}

try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error("Something went wrong - " + error.name + ": " + error.message);
}

console.log(`Do we make it? If seeing this we made it!`);

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(0);
} catch (e) {
  console.log("Hello World!");
}
