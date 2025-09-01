//Write a function that takes an array of words and uses filter to return only the words that start with the letter "a" (case-insensitive).

let words = ["Apple", "banana", "avocado", "Cat"];


function returnA(element){

     return element.toLowerCase().charAt(0)=== "a"
}

console.log(words.filter(returnA));