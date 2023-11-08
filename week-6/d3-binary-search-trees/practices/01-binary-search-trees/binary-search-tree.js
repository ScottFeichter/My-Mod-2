// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null
  }

  insert(val, currentNode=this.root) {
    // Your code here

    const newNode = new TreeNode(val)

    if (!this.root) {
      this.root = newNode
      return this
    }

    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode
        return this
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
        return this
      } else {
        this.insert(val, currentNode.right)
      }
    }

  }

//       4
//     /    \
//    2       6
//  /   \   /   \
// 1     3 5     7
  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
