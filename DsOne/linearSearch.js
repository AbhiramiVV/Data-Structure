function linearSearch(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return i;
        }
    }
    return -1;
}

const array=[7,8,8,6,2,3,4,6,2,4,2,0]
console.log(linearSearch(array,3));