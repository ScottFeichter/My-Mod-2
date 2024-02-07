/*
SINGLE LINK LIST

add to head:
1. length++
2. init newNode

3. set newNode.next to this.head
4. set this.head to newNode

add to tail:
1. length++
2. init newNode
3. check if (this.head === null) ll is empty
  I. YES
     a. this.head = newNode
     b. return
  II. No
     a. let current = this.head (grab the head)
     b. while(current.next) {current = current.next}
        (iterate to find the last)
     c. current.next = newNode;
        (set the (soon to be previous) last node next to newNode)
     d. return


*/

class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    // this.last = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val); // create new node
    newNode.next = this.head; // set next to current head
    this.head = newNode; // set head to point to the new link
    this.length++; // increment the length
  }

  addToTail(val) {
    this.length++; // increment length
    const newNode = new LinkedListNode(val); // create new node

    if (this.head === null) {
      // check if list empty
      this.head = newNode; // if it is we set it to head
      return;
    } else {
      let current = this.head; // grab the head
      while (current.next) {
        // iterate the list until end found
        current = current.next;
      }
      current.next = newNode; // set the (previous) last node next to newNode
      return;
    }
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
