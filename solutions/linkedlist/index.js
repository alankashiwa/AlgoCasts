// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    //this.insertAt(data, 0);
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    //return this.head;
    return this.getAt(0);
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    // if (!this.head) {
    //   this.head = new Node(data, null);
    // }
    // let node = this.head;
    // while (node.next) {
    //   node = node.next;
    // }
    // node.next = new Node(data, null);
    const lastNode = this.getLast();
    if (!lastNode) {
      this.head = new Node(data, null);
    } else {
      lastNode.next = new Node(data, null);
    }
  }
  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data, null);
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
    }
    // const previous = this.getAt(index - 1);
    // if (previous) {
    //   previous.next = new Node(data, previous.next);
    // } else {
    //   const last = this.getLast();
    //   last.next = new Node(data, null);
    // }
    const previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
