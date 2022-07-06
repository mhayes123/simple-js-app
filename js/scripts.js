let pokemonRepository = (function () {
  //IIFE
  let repository = [
    {
      name: "Charmander",
      type: "Fire",
      height: 2,
    },
    {
      name: "Beedrill",
      type: ["Bug", "Poison"],
      height: 3,
    },
    {
      name: "Pikachu",
      type: ["Electric"],
      height: 1,
    },
    {
      name: "Dragonite",
      type: ["Dragon", "Flying"],
      height: 7,
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon)
      });
    }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


  pokemonRepository.add();

  console.log(pokemonRepository.getAll());
  
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });

