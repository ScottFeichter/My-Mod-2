// Adds up positive integers from 1-n
function addNums(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// console.log(addNums(5));

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += addNums(i);
  }
  return total;
}

// console.log(addManyNums(3));

module.exports = [addNums, addManyNums];
