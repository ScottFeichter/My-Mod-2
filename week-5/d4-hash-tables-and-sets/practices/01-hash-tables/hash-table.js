const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    return parseInt(sha256(key).slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);
    const nuPair = new KeyValuePair(key, value);
    if (!this.data[index]) {
      this.data[index] = nuPair;
      this.count++;
      return "insertNoCollisions ran";
    } else {
      throw new Error("hash collision or same key/value pair already exists!");
    }
  }

  insertWithHashCollisions(key, value) {
    const index = this.hashMod(key);
    const nuPair = new KeyValuePair(key, value);
    if (!this.data[index]) {
      this.data[index] = nuPair;
      this.count++;
      return;
    } else {
      let temp = this.data[index];
      this.data[index] = nuPair;
      nuPair.next = temp;
      this.count++;
      return;
    }
  }

  insert(key, value) {
    const index = this.hashMod(key);
    let currentPair = this.data[index];

    while (currentPair && currentPair.key !== key) {
      currentPair = currentPair.next;
    }

    if (currentPair) {
      currentPair.value = value;
    } else {
      const newPair = new KeyValuePair(key, value);

      if (!this.data[index]) {
        this.data[index] = newPair;
      } else {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      }
    }
    this.count++;
  }
}

module.exports = HashTable;
