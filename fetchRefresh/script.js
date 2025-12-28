// fetch=> function used for making HTTP request to fetch resources
//         Simplifies asynchronous data fetching in js and used for interacting with APIs
//         fetch(url,{options})


//https://pokeapi.co/api/v2/pokemon/ditto

fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response=>{
   if(!response.ok){
    throw new Error("We could not locate the resource");
   }else{
    return response.json();
   }
}).then(data=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})