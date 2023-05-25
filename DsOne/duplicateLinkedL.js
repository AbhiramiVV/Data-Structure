class Node{
    constractor(value){
        this.value=value;
        this.next=null;
    }
}
class DuplicateLink{
    constructor(){
        this.head=null;
        this.size=0;
    }

    addNode(value){
        const node=new Node(value);
        if(this.head===null){
            this.head=node;
        }
        else{
            this.tail.next=node;

        }
        this.tail=node;
    }

    removeDuplicates() {
        let current = this.head;
    
        while (current !== null && current.next !== null) {
          if (current.data === current.next.data) {
            if (current.next.next === null) {
              this.tail = current;
              this.tail.next = null;
              return;
            }
            current.next = current.next.next;
          } else {
            current = current.next;
          }
        }
      }
      print(){
        let current=this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next();
        }
      }
    
}

const t=new DuplicateLink();
t.addNode(12);
t.addNode(23);
t.addNode(45);
t.addNode(90);
t.addNode(90);
t.print();