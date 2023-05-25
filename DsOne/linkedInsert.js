class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }

    insertAtBeginning(value) {
        const newNode =new Node(value);
            newNode.next=this.head;
            this.head=newNode;
            this.length++;
        
    }

    insertEnd(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode
        }
        else{
            let current=this.head;
            while(current.next){
                current=current.next

            }
            current.next=newNode;
           
        }

        this.length++;
    }
}
const obj = new SinglyLinkedList();
obj.insertAtBeginning(1);
console.log('one...'+obj.head.value);
obj.insertEnd(2);
console.log(obj.head.next.value);

