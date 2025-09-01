let numbers=[3, 9, 2, 15, 6]

function maxNumber(previousElement, nextElement){

    if(nextElement > previousElement){

        return nextElement
    }else{
        return previousElement
    }
}

let max=numbers.reduce(maxNumber,0);

console.log(max);
