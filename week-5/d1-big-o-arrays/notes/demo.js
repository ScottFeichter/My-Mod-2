function one(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function addNums(end) {
  let counter = 0;
  for (let i = 0; i <= end; i++) {
    counter += i;
  }
  return counter;
}

console.time("Timer1", "Time");
addNums(20000000);
console.timeLog("Timer1", "Log");
// console.timeEnd("Timer1", "End");

let startTime = Date.now();
addNums(20000000);
let endTime = Date.now();
console.log("startTime", startTime);
console.log("endTime", endTime);
console.log("timeResult: ", `${endTime - startTime}`);


let increment = 1000000;
for (let n = increment; n <= 10 * increment; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}

function two(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      console.log([i, j]);
    }
  }
}

function three(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  arr.forEach((ele) => {
    ele *= 2;
  });
}
