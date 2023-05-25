class Node {
    constructor(value) {
      this.value = value;
      this.pre = null;
      this.next = null;
    }
  }
  
  class dList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.tail = newNode;
      } else {
        this.head.pre = newNode;
        newNode.next = this.head;
      }
      this.head = newNode;
      this.size++;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
        newNode.pre = this.tail;
      }
      this.tail = newNode;
      this.size++;
    }
    reverse() {
        let temp = null;
        let current = this.head;
        while (current) {
          temp = current.pre;
          current.pre = current.next;
          current.next = temp;
          current = current.pre;
        }
        if (temp) {
          this.head = temp.pre;
          this.tail = current;
        }
      }
      
  
    print() {
    
      let current=this.head;
      while(current!=null){
          console.log(current.value);

          current=current.next;
      }
    }
  }
  
  const obj2 = new dList();
  obj2.prepend(1);
  obj2.print();
obj2.append(2);
obj2.print(); 
obj2.reverse(); 
obj2.print();