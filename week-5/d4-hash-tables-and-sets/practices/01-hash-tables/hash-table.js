const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)

    // console.log(this)
  }

  hash(key) {
    // Your code here

    // const hash = sha256(key)
    // const hashSub = hash.substring(0, 8)

    // // hexa to deci
    // const deci = parseInt(hashSub, 16)
    // // console.log(deci)

    // return deci

    return parseInt(sha256(key).slice(0, 8), 16)
  }

  hashMod(key) {
    // Your code here
    const hashInt = this.hash(key)
    // console.log(hashInt)

    return hashInt % this.capacity
  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}

// new Array(whateverSize).fill(null)

module.exports = HashTable;
