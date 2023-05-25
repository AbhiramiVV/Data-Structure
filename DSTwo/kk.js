class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }

}
class mid{
    constructor(){
        this.top=null;
        this.size=0;
    }
    isEmpty(){
        return this.size==0;
    }
    prepend(value){
       
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.top=newNode
        }else{
            newNode.next=this.top;
            this.top=newNode
        }
        this.size++;

    }
    print(){
        let current=this.top
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }

    middleEle(){
        let fast=this.top;
        let slow=this.top;
        while(fast.next){
            if (fast.next.next) {
                fast=fast.next.next;
                slow=slow.next
            }
            else{
                console.log(slow.value,"      ",slow.next.value,"middle");
                return
            }
        }
        console.log(slow.value,"middle");

    }
}

const obj=new mid();
obj.prepend(3);
obj.prepend(89);
obj.prepend(45);
obj.prepend(30);
obj.prepend(90);
obj.print();
obj.middleEle();
