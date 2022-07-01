let pokemonRepository = (function (){
    let pokemonList =  
      
    let pokeCharmander = {
        name: 'Charmander',
        type: 'Fire',
        height: 2
      };
      
    let pokeBeedrill = {
        name: 'Beedrill',
        type: ['Bug', 'Poison'],
        height: 3
      };
      
    let pokePikachu = {
        name: 'Pikachu',
        type: ['Electric'],
        height: 1,
      };
      
    let pokeDragonite = {
        name: 'Dragonite',
        type: ['Dragon', 'Flying'],
        height: 7,
      };

    let pokemonRepository = (function () { //IIFE
      let pokemonList = [
        pokeCharmander,
        pokeBeedrill,
        pokePikachu,
        pokeDragonite,
        
      ];

    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    function getAll() {
      return pokemonList;
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();

  function loopFunction(pokemons) {
    document.write(pokemons.name);
    document.write(' (' + 'height: ' + pokemons.height + ') ');
    if (pokemons.height > 5) {
      document.write(' - WOW, this is a big pokemon!');
    }else if (pokemons.height <= 5 && pokemons.height >= 3) {
      document.write('This is an average pokemon');
    }else {
      document.write('This is a Small pokemon');
    }
    document.write('<br>');
  }
  
  pokemonRepository.add(pokeDragonite);
  pokemonRepository.getAll().forEach(loopFunction);})
  console.log(pokemonRepository.getAll)()
