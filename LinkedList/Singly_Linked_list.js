//piece of data - val
//reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      //   this.length += 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      //   this.length += 1;
    }
    this.length += 1;
    return this;
  }
}

var list = new SingleLinkedList();
list.push("Hello");
list.push("I am");
list.push("You");
list.push("You are me");

console.log(list);
console.log(list.head.next);

// var first = new Node("Hi");
// first.next = new Node("Alina");
// first.next.next = new Node("Are you ");
// first.next.next.next = new Node("happy?");

// console.log(first);
