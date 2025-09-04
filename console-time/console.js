//console.time("label")-this is used to identify how much time a section of code takes to execute 

function loadData(){

    console.time("loadData");

    for(let i=0; i<1000000000000000; i++){

        //pretending to load some data
    }
    console.timeEnd("loadData");
}

loadData();