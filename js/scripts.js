let pokemonList=[
  {name: 'Pikachu', height: '4', type: 'Electricity'},
  {name: 'Gyarados', height: '21.4', type: ['Water','flying']},
  {name: 'Charmander', height: '6', type: 'fire'},
  {name: 'Pidgey', height: '1.5', type: ['Normal', 'Flying']}
]

  //Used document.write() inside the loop’s code to write the Pokémon name on my website DOM.
for (let i = 0; i < pokemonList.length; i++){
    if(pokemonList[i].height >20){
    document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " Wow, thats a big Pokemon! <br> ");
}   else if(pokemonList[i].height <3){
    document.write("Name:  " + pokemonList[i].name + " Height: " + pokemonList[i].height + " small Pokemon <br>");
}   else
    document.write("Name: " + pokemonList[i].name + " Height: " + pokemonList[i].height + " normal sized Pokemon <br>");
}


