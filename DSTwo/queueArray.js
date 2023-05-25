class queue{
    constructor(){
        this.item=[];
    }
    enqueue(value){
        this.item.push(value);
    }
    dequeue(){
        return this.item.shift();
    }
    isEmpty(){
        return this.item.length===0;
    }
    peek(){
        if(!this.isEmpty){
           return this.item[0];
        }
        return null;
    }
    size(){
        return this.item.length;
    }
    print(){
        console.log(this.item.toString());
    }
}
const obj=new queue();
console.log(obj.isEmpty());
obj.enqueue(3);
obj.enqueue(13);
obj.enqueue(30);
obj.enqueue(23);
obj.enqueue(63);
obj.enqueue(93);
console.log(obj.size());
console.log(obj.dequeue());


