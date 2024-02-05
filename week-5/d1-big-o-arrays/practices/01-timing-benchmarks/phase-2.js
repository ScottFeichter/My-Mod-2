const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let result = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    result.push(addNums(i));
  }
  return result;
}

// console.log(addNums10(1));

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let result = [];
  for (let i = increment; i <= increment * 10; i += increment) {
    result.push(addManyNums(i));
  }
  return result;
}

// console.log(addManyNums10(1));

module.exports = [addNums10, addManyNums10];
