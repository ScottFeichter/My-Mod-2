function selectionSort(arr) {
  // Copy the original array
  let arrCopy = [...arr];

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arrCopy.length) {
    // Do not move this console.log
    console.log(sorted);

    // Find the index of the minimum value in the unsorted half

    // let minValIdx = 0;

    // for (let i = 1; i < arrCopy.length; i++) {
    //   if (arrCopy[i] < arrCopy[minValIdx]) {
    //     minValIdx = i;
    //   }
    // }

    // The cool way to find min value index:

    let minVal = Math.min(...arrCopy);
    let minValIdx = arrCopy.indexOf(minVal);

    // Save and remove the value at the min index
    let temp = arrCopy.splice(minValIdx, 1);

    // Add the min value to the end of the sorted array
    sorted.push(temp[0]);
    minValIdx = 0;
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;


  // Repeat while the unsorted half is not empty:
  while (arr.slice(divider + 1).length !== 0) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    let minValIdx = divider + 1;

    for (let i = divider + 2; i < arr.length + 1; i++) {
      if (arr[i] < arr[minValIdx]) {
        minValIdx = i;
      }
    }

    // Save the min value

    let temp = arr.splice(minValIdx, 1);

    // Shift every unsorted value to the left of the min value to the right by 1
    arr.shift(temp);

    // Put the min value at the divider

    // Increment the divider and repeat
    divider++
  }
}

module.exports = [selectionSort, selectionSortInPlace];
