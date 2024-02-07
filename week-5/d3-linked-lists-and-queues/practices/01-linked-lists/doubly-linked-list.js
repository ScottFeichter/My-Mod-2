/*

add to head:
1. length++
2. init nuNode
3. if (!this.head)
  I. no head (and no tail)
   a. this.head = nuNode
   b. this.tail = nuNode
  II. yes head (and yes tail)
   a. this.head.prev = nuNode
   b. nuNode.next = this.head
   c. this.head = nuNode


add to tail:
1. length++
2. init nuNode
3. if (!this.tail)
  I. no tail (and no head)
   a. this.head = nuNode
   b. this.tail = nuNode
  II. yes tail (and yes head)
   a. this.tail.next = nuNode
   b. nuNode.prev = this.tail
   c. this.tail = nuNode

*/

class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    this.length++;
    const nuNode = new DoublyLinkedListNode(val);
    if (!this.head) {
      this.head = nuNode; // empty list so nuNode becomes head and tail
      this.tail = nuNode;
      return;
    } else {
      this.head.prev = nuNode; // bc we are about to shove nuNode in front of it
      nuNode.next = this.head; // bc we are about to shove it to next position
      this.head = nuNode; // we shove nuNode in head position
      return;
    }
  }

  addToTail(val) {
    this.length++;
    const nuNode = new DoublyLinkedListNode(val);

    if (!this.tail) {
      this.tail = nuNode;
      this.head = nuNode;
    } else {
      this.tail.next = nuNode; // bc we are about to shove nuNode after tail
      nuNode.prev = this.tail; // bc we are about to have nuNode after tail
      this.tail = nuNode; // nuNode becomes tail
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }
    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
