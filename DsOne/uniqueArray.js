function findUnique(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        unique.push(arr[i]);
      }
    }
    return unique;
  }
  
  // Example usage:
  let arr = [1, 2, 3, 2, 4, 1, 5];
  let uniqueArr = findUnique(arr);
  console.log(uniqueArr); // Output: [3, 4, 5]
  


  function dupli(arr){
    let unique=[]
    for(let i=0;i<arr.length;i++)
    
    {let duplicate=false;
      for(let j=0;j<unique.length;j++)
      {
        if(arr[i]==unique[j]){
          duplicate=true;
          break;

        }
      }
      if(duplicate==false){
        unique.push((arr[i]));
      }

    }
   
    return unique;
  }
const Array=[3,4,5,2,3,4,3]
  console.log(dupli(Array))