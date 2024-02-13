// Iterate through the array
// If the current value is greater than its neighbor to the right
// Swap those values
// If you get to end of array and no swaps have occurred, return
// Otherwise, repeat from the beginning

function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap(arr, i, i + 1);
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
          // Do not move this console.log
  console.log(arr.join(","));
      }
    }
  }



  return arr;
}

module.exports = bubbleSort;
