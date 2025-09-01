Function expressions are a way to define variables as either variables or values

**Sample programme**

let numbers=[1,2,3,4,5];

let cubed=numbers.map(function(element){

    return Math.pow(element, 3);
});

let even=cubed.filter(function(element){

    return element % 2 === 0;
})

let odd=cubed.filter(function(element){

    return element % 2 !== 0
})

console.log(cubed);

console.log(even);

console.log(odd);