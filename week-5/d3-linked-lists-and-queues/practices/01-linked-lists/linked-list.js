class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(value, null); // create new node
    newNode.next = this.head; // set next to current head
    this.head = newNode; // set head to point to the new link
  }

  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head; // grab the head

    while (current) {
      process.stdout.write(`${current.value} -> `); // print value
      current = current.next; // assign current to next node
    }

    console.log("NULL"); // we indicate we are at end
  }
}

module.exports = LinkedList;
