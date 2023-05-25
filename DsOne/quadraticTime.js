function quadratic(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            sum=sum+array[i][j];
        }
    }
    return sum;
}
const arr=[[1,2,3,1,2],[2,2,2,3,3]]
 console.log(quadratic(arr));