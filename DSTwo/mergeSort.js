function mergeSort(array){
    if(array.length<2){
        return array;
    }
    let mid=Math.floor((array.length)/2)
    let leftHalf=array.slice(0,mid);
    let rightHalf=array.slice(mid);
    return merge(mergeSort(leftHalf),mergeSort(rightHalf));
}
function merge(leftHalf,rightHalf){

    const sortedArray=[];
    while(leftHalf.length&&rightHalf.length){
        if(leftHalf[0]<rightHalf[0]){
            sortedArray.push(leftHalf.shift());
        }
        else{
            sortedArray.push(rightHalf.shift());
        }
    }

    return [...sortedArray,...leftHalf,...rightHalf];

}

const arr=[23,4,5,7,1,3,98,56,34,234,7,5,6,1]

console.log(mergeSort(arr));