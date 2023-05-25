function quick(array){
    let startIndex=0;
    let lastIndex=array.length-1;
    quickSort(array,startIndex,lastIndex);
}
 function quickSort(array,startIndex,lastIndex){
    if(lastIndex<=startIndex){
        return;
    }
    let left=startIndex+1;
    let right=lastIndex;
    let pivot=startIndex;

    while(left<=right){
        if(array[pivot]>array[right]&&array[pivot]<array[left])
        {
            [array[left],array[right]]=[array[right],array[left]];
            right--;
            left++

        }
        if(array[pivot]>=array[left]){
            left++;
        }
        if(array[pivot]<=array[right]){
            right--;
        }

    }
    [array[startIndex],array[right]]=[array[right],array[startIndex]];
    quickSort(array,startIndex,right-1);
    quickSort(array,right+1,lastIndex);


}


const array=[23,34,2,34,5,13,42,67,88,976,567]
quick(array);
console.log(array);
