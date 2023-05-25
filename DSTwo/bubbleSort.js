function bubble(array){
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;
}
const ar1=[23,5,67,34,2,1]
console.log(bubble(ar1));



