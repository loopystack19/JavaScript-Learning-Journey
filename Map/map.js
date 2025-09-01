//Take an array of words and use map to return a new array where each word is transformed to uppercase only if its length is greater than 3. Otherwise, keep it as is.


let words = ["cat", "apple", "dog", "banana"];

function toUpperCase(element){

    if(element.length > 3){

        return element.toUpperCase();
    }else{

        return element;
    }
}

let upperCaseWords=words.map(toUpperCase);

console.log(upperCaseWords)