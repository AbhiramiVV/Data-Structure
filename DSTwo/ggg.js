// function quick(array) {
//     let startIndex=0;
//     let endIndex=array.length-1
//     quickSort(array,startIndex,endIndex)
    
// }
// function quickSort(array,startIndex,endIndex) {
//     if(endIndex<=startIndex){
//         return array;
//     }
//     let left=startIndex+1;
//     let right=endIndex;
//     let pivot=startIndex;
//     while(left<=right){
//         if(array[pivot]>array[right]&&array[pivot]<array[left]){
//             [array[left],array[right]]=[array[right],array[left]]
//             left++;
//             right--;
//         }
//         if(array[pivot]>=array[left]){
//             left++;
//         }
//         if(array[pivot]<=array[right]){
//             right--;
//         }
//     }
//     [array[startIndex],array[right]]=[array[right],array[startIndex]]
//     quickSort(array,startIndex,right-1);
//     quickSort(array,right+1,endIndex);
    
// }
// const arr=[34,2,67,8,2,9]
// quick(arr);
// console.log(arr);



class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class stack{
    constructor(){
        this.top=null;
        this.size=0
    }
    push(value){
        const newnode=new Node(value)
        if(this.top==null){
            this.top=newnode;
        }else{
            newnode.next=this.top;
            this.top=newnode
        }
        this.size++
    }
    pop(){
        let current=this.top;
        this.top=this.top.next
        current.next=null
    }
    display(){
        let current=this.top
        while(current){
            console.log(current.value);
            current=current.next
        }
    }
}
const obj=new stack()
obj.push(45);
obj.push(5);
obj.push(50);
obj.push(15);
obj.pop()
obj.display();