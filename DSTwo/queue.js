class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class queue{
    constructor(){
        this.front=null;
        this.rare=null;
    }
    Enqueue(value){
        const newNode=new Node(value);
        if(this.front==null){
            this.front=newNode;
        }else{
            this.rare.next=newNode;
        }
        this.rare=newNode;
    }
    Dequeue(){
        let current=this.front;
        this.front=this.front.next;
        current.next=null;
    }
    print(){
        let current=this.front;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
}
const obj=new queue();
obj.Enqueue(2);
obj.Enqueue(22);
obj.Enqueue(23);
obj.Enqueue(452);
obj.Enqueue(672);
obj.Enqueue(200);
obj.Enqueue(62);
obj.Dequeue();
obj.print();
