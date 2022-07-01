class Stack {
  constructor() {
    this.stack = new Array();
  }
  get length() {
    return this.stack.length;
  }
  push(item) {
    return this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.length - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
}

class Queue {
  constructor() {
    this.queue = new Array();
  }
  get length() {
    return this.queue.length;
  }
  enqueue(item) {
    return this.queue.unshift(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[this.length - 1];
  }
  isEmpty() {
    return this.length === 0;
  }
}
