function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }

    }
   
    return arr;
}

const arrr1=[2,34,56,78,8,5];
console.log(selection(arrr1));

/////////////////////////////////////////////////////////////////////

function selection(arr){
    for(let i=0;i<arr.length-1;i++){
    
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            
            }
        }
      

    }
   
    return arr;
}
const arr1=[2,34,56,78,8,5];
console.log(selection(arr1));