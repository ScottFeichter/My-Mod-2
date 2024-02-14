// Merge Sort out-of-place - Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Divide the array in half
  let midIdx = Math.floor(arr.length / 2);

  let leftHalf = arr.slice(0, midIdx);
  let rightHalf = arr.slice(midIdx);

  // Recursively sort the left half
  const leftSorted = mergeSort(leftHalf);

  // Recursively sort the right half
  const rightSorted = mergeSort(rightHalf);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;

  // While there are still values in each array...
  while (indexA < arrA.length || indexB < arrB.length) {
    // Compare the first values of each array
    if (indexA === arrA.length) {
      // Add the smaller value to the return array
      merged.push(arrB[indexB]);
      indexB++;
      // Move the pointer to the next value in that array
    } else if (indexB === arrB.length) {
      merged.push(arrA[indexA]);
      indexA++;
    } else if (arrA[indexA] < arrB[indexB]) {
      merged.push(arrA[indexA]);
      indexA++;
    } else {
      merged.push(arrB[indexB]);
      indexB++;
    }
  }
  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];
