const arr=[-2,3,2,4,5,6,3]
let small=secSmall=0
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>0){
        if(arr[i]<small || small==0){
            secSmall=small;
            small=arr[i];
        }
    }
if(arr[i]>small&&arr[i]<secSmall){
    secSmall=arr[i];

}


}
console.log(secSmall);
console.log(small);
