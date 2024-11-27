function showFire(){
    alert("Fire");
}

const BASE_URL = "https://pokeapi.co/api/v2/";
let offset = 0; // Keeps track of the offset for pagination

// Function to fetch a batch of Pokémon
async function fetchPokemonBatch(limit = 20, offset = 0) {
    try {
        const response = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) throw new Error("Failed to fetch Pokémon");
        const data = await response.json();
        displayPokemonBatch(data.results); // Display the fetched Pokémon
    } catch (error) {
        console.error(error);
        alert("Could not fetch Pokémon. Please try again!");
    }
}

// Function to fetch and display details of a batch of Pokémon
async function displayPokemonBatch(pokemonList) {
    const section = document.getElementById("pokemon-container");

    for (const pokemon of pokemonList) {
        const pokemonData = await fetchPokemonDetails(pokemon.url);
        const pokemonCard = `
            <div class="pokemon-card">
                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                <h3>${pokemonData.name.toUpperCase()}</h3>
                <p>Type: ${pokemonData.types.map(type => type.type.name).join(", ")}</p>
            </div>
        `;
        section.innerHTML += pokemonCard;
    }
}

// Function to fetch details of a single Pokémon
async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return await response.json();
}

// Event listener for "Load More" button
document.getElementById("load-more").addEventListener("click", () => {
    offset += 20; // Increase offset by 20
    fetchPokemonBatch(20, offset);
});

// Initial fetch when the page loads
fetchPokemonBatch(20, offset);

