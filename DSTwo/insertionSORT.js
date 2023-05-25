function insertion(array){
    for(let i=1;i<array.length-1;i++){
        let current=array[i]
        let j=i-1;
        while(j>=0&&array[j]>current){
            array[j]=array[j+1];
            j--;
        }
        array[j+1]=current;
    }
    return array;
}
const ar1=[2,5,78,3,12,1,100]
console.log(insertion(ar1));