class Heap{
    constructor(){
        this.heap=null;
    }
    buidHeap(array){
        this.heap=array
        for (let i = this.parent(this.heap.length-1); i >=0;i--) {
            this.shiftDown(i)            
        }
    } 
    shiftDown(currentIndex){
        let endIndex=this.heap.length-1;
        let leftIndex=this.leftChild(currentIndex)
        let shiftIndex;
        while(leftIndex<=endIndex){
            let rightIndex=this.rightChild(currentIndex)
            if(rightIndex<=endIndex&&this.heap[rightIndex]<this.heap[leftIndex]){
                shiftIndex=rightIndex

            }else{
                shiftIndex=leftIndex
            }
            if( this.heap[shiftIndex]<this.heap[currentIndex]){
                [this.heap[currentIndex],this.heap[shiftIndex]]=[this.heap[shiftIndex],this.heap[currentIndex]]
                currentIndex=shiftIndex
                leftIndex=this.leftChild(currentIndex)
            }else{
                return
            }
        }

    }
    remove(){
        if(this.heap===null){
            return null;
        }
        [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
        const root=this.heap.pop()
        this.shiftDown(0)
        return root;
    }
   insert(value){
    this.heap.push(value)
    this.shiftUp(this.heap.length-1);
   }
   shiftUp(currentIndex){
    let parentIndex=this.parent(currentIndex)
    while(parentIndex>=0 && this.heap[currentIndex]>this.heap[parentIndex]){
        [this.heap[currentIndex],this.heap[parentIndex]]=[this.heap[parentIndex],this.heap[currentIndex]]
        currentIndex=parentIndex
        parentIndex=this.parent(currentIndex)
        
    }

   }
   sort(){
    let sortedArray=[]
   while (this.heap.length>0) {
    [this.heap[0],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[0]]
    sortedArray.unshift(this.heap.pop())
    this.shiftDown(0);
    
   }
   console.log(sortedArray);

  
   }
   

//    sort() {
//   const largestThree = [];
//   for (let i = 0; i < 3; i++) {
//     if (this.heap.length > 0) {
//       [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
//       largestThree.unshift(this.heap.pop());
//       this.shiftDown(0);
//     }
//   }
//   console.log("Largest 3 numbers:", largestThree);
// }

   parent(i){
    return Math.floor((i-1)/2)
   }
   leftChild(i){
    return (2*i+1)
   }
   rightChild(i){
    return (2*i+2)
   }
   display(){
    console.log(this.heap);
   }

}

const array=[8,6,3.5,-5,7,0,6,4,7,10,2,1]
const obj= new Heap(array);
obj.buidHeap(array)
obj.display()
