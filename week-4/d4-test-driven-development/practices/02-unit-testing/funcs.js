function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number !== "number") {
    throw Error(`not a number`);
  }

  return !(number % 2 === 0);
}

function myRange(min, max, step = 1) {
  let restulArr = [];
  if (min > max) {
    return restulArr;
  } else {
    for (let i = min; i <= max; i += step) {
      restulArr.push(i);
    }
    return restulArr;
  }
}

module.exports = { isFive, isOdd, myRange };
