function deleArr(){
    const arr=[6,9,4,6,10]
    let index=2;
    for(let i=index;i<arr.length-1;i++){
        arr[i]=arr[i+1]
    }
    arr.pop();

console.log(arr);
}
deleArr();