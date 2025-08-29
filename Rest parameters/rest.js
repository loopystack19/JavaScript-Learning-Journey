

function getAverage(...marks){

    let results=0;

    let average=0;

    for(let i=0; i<marks.length; i++){

        results+=marks[i]
    }

     average= (results/marks.length).toFixed(2);

     return average;
}

console.log(getAverage(87,98,56,45,12,34,89));