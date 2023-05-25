function Sum(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
            sum=sum+array[i];
    }
return sum;
}
const srr=[2,3,4,5,12,6]
console.log(Sum(srr));