class DynamicArray {
  constructor(defaultSize = 4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = this.fillData(this.capacity);
  }

  fillData(capacity) {
    let res = [];
    for (let i = 0; i < this.capacity; i++) {
      res[i] = undefined;
    }
    return res;
  }

  read(index) {
    if (index >= this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {
    if (this.data[0] === undefined && this.length === 0) {
      this.length++;
      this.data[0] = val;
    } else if (this.data[0] === undefined && this.length !== 0) {
      this.data[0] = val;
    } else {
      let temp;
      for (let i = this.length; i < this.length - 1; i--) {
        temp = this.data[i + 1];
        this.data[i + 1] = this.data[i];
        if (this.data[i + 2]) {
          this.data[i + 2];
        }
      }
      this.data[0] = val;
      this.length++;
    }
  }
}

// let dynamicArr = new DynamicArray(8);
// dynamicArr.data[0] = 99;
// console.log(dynamicArr);

module.exports = DynamicArray;
