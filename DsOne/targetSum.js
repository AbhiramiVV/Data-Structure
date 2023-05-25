function targetSum(arr,target){
    for(let i=0;i<arr.length-1;i++)
    {
        const com=target-arr[i];
      for(let j=i+1;j<arr.length;j++){
        if(com === arr[j]){

            return [arr[i],arr[j]];

        }
      }
    }
    return null;
      
}

const arr =[4,6,3,2,0]
const target=5;
const result=targetSum(arr,target);

console.log(result);