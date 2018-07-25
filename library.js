pokemonPage = {
  trainerBen: "images/" + "trainerBen.png",
  trainerJerry: "images/" + "trainerJerry.png",
  trainerWalia: "images/" + "trainerWalia.png",
}


pokemonGet = [];
totalPokemon = 0;

owner = {
    name: trainerName,
    ownedPokemon: pokemonGet,
    function() {
      var arrayContents = 0;
      for (arrayContents = 0; arrayContents < pokemonGet.length; arrayContents++)
      alert(JSON.stringify(pokemonGet[arrayContents]));
    }
}

function retPokemon () {
pokemon = {
  pokeName: myObj.name,
  pokeImage: myObj.sprites.front_default,
  pokeNumber: "Num " + myObj.id,
  pokeType: myObj.types[0].type.name,
  atk: myObj.stats[4].base_stat,
  def: myObj.stats[3].base_stat,
  hp: myObj.stats[5].base_stat
}

}
function retPokemon2 () {
pokemon = {
  pokeName: myObj.name,
  pokeImage: myObj.sprites.front_default,
  pokeNumber: "Num " + myObj.id,
  pokeType: myObj.types[0].type.name,
  pokeType2: myObj.types[1].type.name,
  atk: myObj.stats[4].base_stat,
  def: myObj.stats[3].base_stat,
  hp: myObj.stats[5].base_stat

}

}


function loadPokemon(pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      document.getElementById("pokeName").innerHTML = myObj.name;
      document.getElementById("pokeImage").src = myObj.sprites.front_default;
      document.getElementById("pokeNumber").innerHTML = "Num " + myObj.id;
      document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
      // document.getElementById("pokeType2").innerHTML = myObj.types[1].type.name;
      document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
      document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
      document.getElementById("abilityBox").innerHTML = "This pokemon's HP is " + myObj.stats[5].base_stat + " and it's abilitiy is " + myObj.abilities[0].ability.name + ". ";
      // + "Abilities are " + myObj.abilities[0].ability.name + " and " + myObj.abilities[1].ability.name + ". ";

if (myObj.types[0].slot == 2) {
document.getElementById("pokeType2").innerHTML = myObj.types[1].type.name;
responsiveVoice.cancel();
  retPokemon2();
      responsiveVoice.speak(myObj.name);
      responsiveVoice.speak(myObj.types[0].type.name + "type");
      responsiveVoice.speak("Also" + myObj.types[1].type.name + "type.");
        responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
}
  else {
    document.getElementById("pokeType2").innerHTML = "Pokemon Type";
    responsiveVoice.cancel();
    retPokemon();
        responsiveVoice.speak(myObj.name);
        pokeType: responsiveVoice.speak(myObj.types[0].type.name + "type");
          responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
  }
    // retPokemon();
    addPokemonToList();
        }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon, true);
  xhttp.send();
}

function adopt() {
  totalPokemon++;
  pokemonGet.push(pokemon);
    alert("You have " + totalPokemon + " pokemon")
    checkList();
}
