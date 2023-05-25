class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class stack{
    constructor(){
        this.top=null;
    }

    push(value){
        const node=new Node(value);
        if(this.top==null){
            this.top=node;
        }else{
            node.next=this.top;
            this.top=node;
        }
    }
    pop(){
        if(!this.top){
            console.log('underflow');
            return;
        }
        else{
            let current=this.top;
            this.top=this.top.next;
            current.next=null;
        }
    }
    print(){
        let current=this.top;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
}
const obj=new stack();
obj.push(3);
obj.push(4);

obj.push(33);

obj.push(37);
obj.push(23);
obj.push(113);
//obj.print();
obj.pop();
obj.print();


