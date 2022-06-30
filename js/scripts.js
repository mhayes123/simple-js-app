let pokemonRepository = (function () {
    
  let pokemonList = [ 
    {name: 'Pikachu',   height: '4', type: 'Electricity'},
    {name: 'Gyarados', height: '21.4', type: ['Water','flying']},
    {name: 'Charmander', height: '6', type: 'fire'},
    {name: 'Pidgey', height: '1.5', type: ['Normal', 'Flying']}
  ];

  pokemonList.forEach(function(user) {
    console.log(user.name + '  ' + user.height + '  ' + user.type + '  ' );
  });

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

  console.log(pokemonRepository.getAll)()

