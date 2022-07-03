let pokemonRepository = (function () {
  //IIFE
  let pokemonList = [
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
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

function loopFunction(pokemon) {
  document.write(pokemon.name);
  document.write(" (" + "height: " + pokemon.height + ") ");
  if (pokemon.height > 5) {
    document.write(" - WOW, this is a big pokemon!");
  } else if (pokemon.height <= 5 && pokemon.height >= 3) {
    document.write("This is an average pokemon");
  } else {
    document.write("This is a Small pokemon");
  }
  document.write("<br>");
}
pokemonRepository.getAll().forEach(loopFunction);
