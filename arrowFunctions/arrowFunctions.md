-Arrow functions are a conscise and an easy way for righting functions especially if they are being used only once 

**Sample programme**

let numbers=[1,2,3,4,5];

let sum=numbers.reduce((previousElement, nextElement)=>{

    return previousElement + nextElement ;
},0);

console.log(sum);