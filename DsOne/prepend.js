class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class singlyList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
isEmpty () {
     return this.size ===0;
}
getSize () {
    return this.size;
}
//o(1)
prepend(value){
    const newNode= new Node(value)
    if(this.isEmpty()){
        this.head=newNode;
        this.tail=newNode;
    }
    else{
            newNode.next=this.head;
            this.head=newNode;
    }
    this.size++;
}
//o(1)
append(value){
    const newNode=new Node(value)
    if(this.isEmpty()){
        this.head=newNode;
        this.tail=newNode;
    }
    else{  
        this.tail.next=newNode;
        this.tail=newNode;
    }
this.size++;
}
insert(value,position){
    if(position<0 || position>this.size){
        return null
    }
    const newNode=new Node(value);
    if(position==0){
        this.prepend(value);
    }
    else if(position==this.size){
        this.append(value);
    }
    else{
        let cur=this.head;
        let pre=null;
        let i=0;
        while(i<position){
            pre=cur;
            cur=cur.next;
            i++
        }
        pre.next=newNode;
        newNode.next=cur;
        this.size++;

    }


}

removeFront(value){
    if(this.isEmpty()){
        return null;
    }
    value=this.head.value
    this.head=this.head.next
    this.size--
    return value
}

removeEnd(value){
    if(this.isEmpty()){
        return null
    }
    value=this.tail.value
    if(this.size==1){
        this.head=null
        this.tail=null
    }else{
        let pre=this.head
        while(pre.next!==this.tail){
            pre=pre.next
        }
        pre.next=null
        this.tail=pre
    }
    this.size--
    return value;
}


removeAppend(position){
    if(position<0 || position>this.size){
        return false;
    }
    let removeNode;
    if(position==0){
        removeNode=this.head;
        this.head.next=this.head.next;
        this.size--;

    }else{
        let pre=this.head;
        for(let i=0;i<position-1;i++){
            removeNode=pre.next;
            pre.next=removeNode.next;
        }
    }
    return removeNode.value;
}
removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value==value){
        this.head=this.head.next;
        this.size--;
        return value
    }else{
        let prev=this.head;
        while(prev.next && prev.next.value != value)
         {
       prev= prev.next
         }   
if(prev.next){
    let removeNode=prev.next;
    prev.next=removeNode.next;
    this.size--;
    return value
}
return null;
}
}

search(value){
    if(this.isEmpty()){
        return -1;
    }
    let i=0;
    let cur=this.head;
    while(cur){
        if(cur.value === value){
            return i
        }
    cur=cur.next;
    i++;
    }
    return -1;
}
revers(){
    let pre=null;
    let cur=this.head;
    while(cur){
        let next=cur.next;
        cur.next=pre
        pre=cur
        cur=next
    }
    this.head=pre
}
print() {
    // if (this.isEmpty()) {
    //     console.log('list is empty');
    // } else {
    //     let curr = this.head;
    //     let listvalue = "";
    //     while (curr) {
    //         listvalue += `${curr.value}`;
    //         curr = curr.next;
    //     }
    //     console.log(listvalue);
    // }
    let current=this.head;
    while(current!=null){
        console.log(current.value);

        current=current.next;
    }
}



}

const obj=new singlyList();
obj.prepend(1);
obj.print();
obj.prepend(3);
obj.prepend(6);
obj.print();
obj.append(3);
obj.print();
obj.insert(40,2);
obj.print();
// obj.revers();
// obj.print();
obj.removeFront(6);
obj.print();
obj.removeEnd(3);
obj.print();
// console.log(obj.search(40));
// obj.removeAppend(2);
// obj.print();
// obj.removeValue(40);
// obj.print();