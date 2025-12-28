//JSON.stringify()=>converts a js object to a JSON string
//JSON.parse()=>converts a JSON string to a JS object

let person={
    "firstName":"SpongeBob",
    "lastName":"SquarePants",
    "age":21,
    "hobbies":["Karate","Fishing","Cooking"]
}

let jsonString=JSON.stringify(person);

let parseObject=JSON.parse(jsonString);

console.log(jsonString);

console.log(parseObject);