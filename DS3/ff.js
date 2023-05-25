let str1='hai'
 str1=[...str1]
let str2='hellyuyo'
str2=[...str2]


let a=[]
let j=0
for (let i = 0; i < str1.length+str2.length; i++,j++) {
   
if(str1[i!=undefined] || str2[i]!=undefined)   {
a[j]=str1[i]
j++;
a[j]=str2[i]
} 
}
console.log(a.join(''));
