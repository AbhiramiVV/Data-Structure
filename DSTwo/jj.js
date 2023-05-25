class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null
        this.size=0
    }
    push(value){
        const newNode=new Node(value)
        if(this.top===null){
            this.top=newNode
        }else{
            newNode.next=this.top
            this.top=newNode
        }
        this.size++;
    }
    pop(){
        let current=this.top;
        this.top=this.top.next
        current.next=null
        return current.value;
    }
    midle(){
        let fast=this.top;
        let slow=this.top
        while (fast.next) {
            if(fast.next.next){
                fast=fast.next.next
                slow=slow.next
             }
            else{
                console.log(slow.value,     slow.next.value);
                return
            }
 
        }
        console.log(slow.value,"midle");

    }
 
    reverse(){
        const auxArray=new stack()
        while(this.top!=null){
            auxArray.push(this.pop())
        }
        while (auxArray.top!=null) {
            this.push(auxArray.pop())
            
        }
      }
    display(){
        let current=this.top
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}

const obj=new stack();
obj.push(34);
obj.push(9);
obj.push(40);
obj.push(14);
obj.push(24);
obj.push(4);
obj.push(64);

console.log("rever");
obj.reverse()
obj.display();
obj.midle()