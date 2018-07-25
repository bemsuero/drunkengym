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
      typeChange2();
      responsiveVoice.speak(myObj.name);
      responsiveVoice.speak(myObj.types[0].type.name + "type");
      responsiveVoice.speak("Also" + myObj.types[1].type.name + "type.");
        responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
}
  else {
    document.getElementById("pokeType2").innerHTML = "Pokemon Type";
    responsiveVoice.cancel();
    retPokemon();
        typeChange();
        removeClasses2();
        responsiveVoice.speak(myObj.name);
        pokeType: responsiveVoice.speak(myObj.types[0].type.name + "type");
          responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
  }
    // retPokemon();
    typeChange();
    openBall();
    addPokemonToList();
    document.getElementById("moveList").innerHTML = " ";
        }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon, true);
  xhttp.send();
}
