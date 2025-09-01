
const strings=["apple", "banana", "kiwi"];


function stringLength(element){

    return element.length;
}


let lengthArray=strings.map(stringLength);

console.log(lengthArray);