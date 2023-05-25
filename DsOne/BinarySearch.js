// function binary(arr,value){
//     let left=0;
//     let right=arr.length-1;
//     while(left<=right){
//         let mid=Math.floor((left+right)/2);
//         if(arr[mid]==value){

//             return mid;

//         }
//         else if(arr[mid]<value){
//             left=mid+1;
//         }else{
//             right=mid-1;
//         }
//     }
//     return -1;
// }
// const array=[3,4,67,75,80]
// console.log(binary(array,67));

function binary(array,value,left=0,right=array.length-1){
    if(left>right){
        return 1;
    }
    let mid=Math.floor((left+right)/2)
    if(array[mid]==value){
        return mid;
    }
    else if(array[mid]<value){
        return  binary(array,value,mid+1,right);

    }
    else{
        return binary(array,value,left.mid-1);
    }
    return -1;
}
 const ar1=[2,3,4,56,78];
 console.log(binary(ar1,56));