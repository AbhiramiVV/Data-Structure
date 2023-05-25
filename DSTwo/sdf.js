class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (this.top === null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.size++;
    }
  
    pop() {
      if (this.top === null) {
        return null;
      }
      const current = this.top;
      this.top = this.top.next;
      current.next = null;
      this.size--;
      return current.value;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    display() {
      let current = this.top;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  
    reverse() {
      const auxiliaryStack = new Stack();
      const auxiliaryStack2 = new Stack();
  
      // Transfer elements from the original stack to the auxiliary stack
      while (!this.isEmpty()) {
        auxiliaryStack.push(this.pop());
      }
  
      // Transfer elements back from the auxiliary stack to the original stack
      while (!auxiliaryStack.isEmpty()) {
        auxiliaryStack2.push(auxiliaryStack.pop());
      }

      while(!auxiliaryStack2.isEmpty()){
        this.push(auxiliaryStack2.pop())
      }
    }

    update(value,newValue){
let current=this.top
let newStack=new Stack();

        while (current.value!=value) {
            newStack.push(this.pop())
            current=current.next
            if(!current){
                break;
            }
        }
        this.pop()
        this.push(newValue)
        while (!newStack.isEmpty()) {
            this.push(newStack.pop())
        }
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  
  console.log("Original stack:");
  stack.display(); // Output: 4 3 2 1
  
  stack.reverse();
  
  console.log("Reversed stack:");
  stack.display(); // Output: 1 2 3 4

  stack.update(3,10)
  stack.display()
  