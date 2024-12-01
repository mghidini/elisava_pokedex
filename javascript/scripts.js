// Pokémon data
const pokemonList = [
    { type: "normal", name: "Eevee", abilities: ["run away", "adaptability", "anticipation"], image: "../img/133.png"},
    { type: "fire", name: "Charmander", abilities: ["blaze", "solar power"], image: "../img/004.png" },
    { type: "water", name: "Squirtle", abilities: ["torrent", "rain dish"], image: "../img/007.png" },
    { type: "grass", name: "Bulbasaur", abilities: ["overgrow", "chlorophyll"], image: "../img/001.png" },
    { type: "electric", name: "Pikachu", abilities: ["static", "lightning rod"], image: "../img/025.png" },
    { type: "ice", name: "Snorunt", abilities: ["inner focus", "ice body", "moody"], image: "../img/361.png" },
    { type: "fighting", name: "Machop", abilities: ["guts", "no guard", "steadfast"], image: "../img/066.png" },
    { type: "poison", name: "Zubat", abilities: ["inner focus", "infiltrator"], image: "../img/041.png" },
    { type: "ground", name: "Sandshrew", abilities: ["Sand Veil", "sand rush"], image: "../img/027.png" },
    { type: "flying", name: "Pidgey", abilities: ["keen eye", "tangled feet", "big pecks"], image: "../img/016.png" },
    { type: "psychic", name: "Abra", abilities: ["synchronize", "inner focus", "magic guard"], image: "../img/063.png" },
    { type: "bug", name: "Caterpie", abilities: ["shield dust", "run away"], image: "../img/010.png" },
    { type: "rock", name: "Geodude", abilities: ["rock head", "sturdy", "sand veil"], image: "../img/074.png" },
    { type: "ghost", name: "Gastly", abilities: ["levitate"], image: "../img/092.png" },
    { type: "dark", name: "Poochyena", abilities: ["run away", "quick feet", "rattled"], image: "../img/261.png" },
    { type: "dragon", name: "Dratini", abilities: ["shed skin", "marvel scale"], image: "../img/147.png" },
    { type: "steel", name: "Magnemite", abilities: ["magnet Pull", "sturdy", "analytic"], image: "../img/081.png" },
    { type: "fairy", name: "Clefairy", abilities: ["cute charm", "magic guard", "friend guard"], image: "../img/035.png" },
  ];
  
  
  // default: show all
  const container = document.getElementById("pokemon-container");
  container.innerHTML = "";
  
  let i = 0;
  while (i < pokemonList.length) {
    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.innerHTML = `
      <img src="${pokemonList[i].image}" alt="${pokemonList[i].name}" class="pokemon-image" />
      <h3>${pokemonList[i].name}</h3>
      <p>Type: ${pokemonList[i].type}</p>
      <p>Abilities: ${pokemonList[i].abilities.join(", ")}</p>
    `;
    container.appendChild(card);
    i++;
  }
  
  // type buttons event listeners
  const typeButtons = document.querySelectorAll(".btn-header");
  let j = 0;
  while (j < typeButtons.length) {
    typeButtons[j].addEventListener("click", function () {
      const filterType = this.id === "ver-todos" ? "all" : this.id;
      container.innerHTML = "";
  
      let k = 0;
      while (k < pokemonList.length) {
        if (filterType === "all" || pokemonList[k].type === filterType) {
          const card = document.createElement("div");
          card.className = "pokemon-card";
          card.innerHTML = `
            <img src="${pokemonList[k].image}" alt="${pokemonList[k].name}" class="pokemon-image" />
            <h3>${pokemonList[k].name}</h3>
            <p>Type: ${pokemonList[k].type}</p>
            <p>Abilities: ${pokemonList[k].abilities.join(", ")}</p>
          `;
          container.appendChild(card);
        }
        k++;
      }
    });
    j++;
  }