function linearSearch(arr, target) {

  // the old fashioned way

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) {
  //     return i;
  //   }
  // }
  // return -1;

  // the cool one liner way

  return arr.indexOf(target);
}

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (lo < hi) {
    // Find the midpoint between high and low indices
    let mid = Math.ceil((lo + hi) / 2);
    // Compare the target value to the midpoint value
    if (arr[mid] === target) {
      // If the target equals the midpoint...
      // Return the midpoint index
      return mid;
      // If the target is higher than the midpoint...
    } else if (arr[mid] < target) {
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
      // If the target is less than the midpoint...
    } else if (arr[mid] > target) {
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
    }
  }
  return -1;
  // Return -1 if the loop exits with overlapping pointers
}

module.exports = [linearSearch, binarySearch];
