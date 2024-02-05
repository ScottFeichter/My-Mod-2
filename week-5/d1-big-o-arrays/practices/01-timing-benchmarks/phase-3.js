const [addNums, addManyNums] = require("./phase-1");
const [addNums10, addManyNums10] = require(`./phase-2`);

// n = 1000;
// console.log(`addNums(${n}): `);
// console.time("timer1");
// addNums10(n);
// console.timeLog("timer1");
// console.timeEnd("timer1");

function addNums10Timing(amount) {
  let startTime = Date.now();
  let result = addNums10(amount);
  let endTime = Date.now();
  let time = `${endTime - startTime}`;
  return `addNums10Timing ran the result is ${result} and the time is ${time}`;
}

console.log(addNums10Timing(10000));

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
// addManyNums10Timing(1000);

function addManyNums10Timing(amount) {
  let startTime = Date.now();
  let result = addManyNums10(amount);
  let endTime = Date.now();
  let time = `${endTime - startTime}`;
  return `addManyNums10Timing ran the result is ${result} and the time is ${time}`;
}

console.log(addManyNums10Timing(10000));
