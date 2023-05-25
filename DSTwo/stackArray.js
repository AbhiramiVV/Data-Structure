class stack{
    constructor(){
        this.item=[];
    }
    push(value){
        this.item.push(value);
    }
    pop(){
        return this.item.pop();
    }
    peek(){
        return this.item[this.item.length-1]
    }
    isEmpty(){
        return this.item.length===0;
    }
size(){
    return this.item.length
}
print(){
    console.log(this.item.toString());
}
}
const obj=new stack();
obj.push(4);
obj.push(114);
obj.push(24);
obj.push(400);
obj.push(489);
obj.push(24);
obj.push(423);
obj.push(64);
obj.print();
console.log(obj.peek());
console.log(obj.size());


