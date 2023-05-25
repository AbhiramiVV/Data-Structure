class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
 class ArrayToll{
    constructor(){
        this.head=null;
        
    }


    AtoLL(array){
        let current=null;
        if(array==null){
            return null;
        }
        for(let i=0;i<array.length;i++){
            if(i==0){
                this.head=new Node(array[i]);
                current=this.head;
            }else{
                current.next=new Node(array[i]);
                current=current.next
            }
        }

    }

    print(){
        let current=this.head
        while(current!=null){
            console.log(current.value);
            current=current.next;
        }
    }
 }

 const l1=new ArrayToll();

 const arr=[2,3,45,6,7,2];
 l1.AtoLL(arr);
 l1.print();