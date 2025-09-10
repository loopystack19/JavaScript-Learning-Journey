async function fetchData() {
  try {
    let pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("we could not locate the resource ");
    }

    let data = await response.json();

    const pokemonSprite = data.sprites.front_default;

    let image = document.getElementById("pokemonSprite");

    image.src = pokemonSprite;

    image.style.display = "block";
  } catch (error) {

    console.log(error);
  }
}

fetchData();
