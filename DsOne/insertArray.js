function inArr(){
    const arr=[4,8,6,3,7]
    let index=2;
    let value=10;
    for(let i=arr.length-1;i>index;i--){
        arr[i]=arr[i-1]
    }
    arr[index]=value;
    console.log(arr);
}
inArr();