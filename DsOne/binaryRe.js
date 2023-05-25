function binaryRe(arr,value,left=0,right=arr.length-1){
    if(left>right){
        return -1;
    }
    const mid=Math.floor((left+right)/2)
    if(arr[mid]===value){
        return mid;
    }
    else if(arr[mid]<value){
        return binaryRe(arr,value,mid+1,right);
    }
    else{
        return  binaryRe(arr,value,left,mid-1);
    }
    return 1;
}

const array=[2,3,4,12,45,7];
console.log(binaryRe(array,4));

//The time complexity of binary search is O(log n), 
//The space complexity of binary search is O(1)