class Node{
    constructor(value){
        this.value=value;
        this.pre=null;
        this.next=null;
    }
}
class Dobl{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;

    }
    isEmpty(){
        return this.size===0;
    }
    prepend(value){
        const newNode=new Node(value);

        if(this.isEmpty()){
            this.tail=newNode;
        }
        else{
            this.head.pre=newNode;
        newNode.next=this.tail;

        }
        this.head=newNode;
        this.size++;

    }
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            return null;
        }
        else{
            this.tail.next=newNode
            newNode.pre=this.tail;

        }
        this.tail=newNode;
        
    }
    print(){
        let current=this.head
        while(current!=null){
            console.log(current.value);
            current=current.next;
        }
    }
}
const obj=new Dobl();
obj.prepend(1);
obj.print();