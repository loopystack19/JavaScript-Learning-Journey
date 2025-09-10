fetch is used to make http request to fetch resources

**sample programme**

async function fetchData(){

   try{

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    if(!response.ok){

        throw new Error("We could not locate the resource");
    }

    const data = await response.json();

    console.log(data);

   }
   catch(error){

    console.log(error);
   }
}

fetchData();