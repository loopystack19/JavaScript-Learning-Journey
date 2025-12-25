//Array of objects in js

let fruits=[
  {fruitName:"Apple",color:"red",kcal:340},
  {fruitName:"Banana",color:"yellow",kcal:320},
  {fruitName:"Oranges",color:"Orange",kcal:112},
  {fruitName:"Coconut",color:"brown",kcal:230}
]

//using the map array method

const fruitNames=fruits.map(fruit => fruit.fruitName);

//using the filter method

const higherCalories=fruits.filter((fruit)=>{
  if(fruit.kcal>112){
    return fruit;
  }
})

//using the reduce method

let maxFruits=fruits.reduce((accumulator, next)=>{
  if(next.kcal> accumulator.kcal){
    return next;
  }else{
    return accumulator;
  }
})

console.log(fruitNames);

console.log(higherCalories);

console.log(maxFruits);