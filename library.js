pokeBios = {
  bioHaunter: "On moonless nights, Haunter searches for someone to curse, so it’s best not to go out walking around.",
  bioGiratina: "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
  bioMarshadow: "It sinks into the shadows of people and pokemon, where it can understand their feelings and copy their capabilities.",
  bioSceptile: "In the jungle, its power is without equal. This pokemon carefully grows trees and plants. It regulates its body temperature by basking in sunlight.",
  bioSerperior: "It only gives its all against strong opponents who are not fazed by the glare from Serperior’s noble eyes.",
  bioQuilladin: "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.",
  bioLucario: "It concentrates its mental energy and fires off mysterious waves called auras, which can crush boulders of large size to dust.",
  bioMetagross: "It analyzes its opponents with more accuracy than a supercomputer, which enables it to calmly back them into a corner.",
  bioMagnezone: "It uses radar to monitor its territory. Intruders are quickly disposed of with a hyper beam."
}

var pokeBio = document.getElementById("pokemon-bio");
// pokeBio.innerHTML = pokeBios.pokemon;


function getBio(pokemon) {
  if (myObj.name == "haunter") {
    pokeBio.innerHTML = pokeBios.bioHaunter;
  }
  if (myObj.name == "giratina") {
    pokeBio.innerHTML = pokeBios.bioGiratina;
  }
  if (myObj.name == "marshadow") {
    pokeBio.innerHTML = pokeBios.bioMarshadow;
  }
  if (myObj.name == "sceptile") {
    pokeBio.innerHTML = pokeBios.bioSceptile;
  }
  if (myObj.name == "serperior") {
    pokeBio.innerHTML = pokeBios.bioSerperior;
  }
  if (myObj.name == "quilladin") {
    pokeBio.innerHTML = pokeBios.bioQuilladin;
  }
  if (myObj.name == "lucario") {
    pokeBio.innerHTML = pokeBios.bioLucario;
  }
  if (myObj.name == "metagross") {
    pokeBio.innerHTML = pokeBios.bioMetagross;
  }
  if (myObj.name == "magnezone") {
    pokeBio.innerHTML = pokeBios.bioMagnezone;
  }

}
function appear() {
var a = document.getElementById('pokemonImage');
var b = document.getElementById("description");
b.classList.remove("invisible");
a.classList.remove("invisible");
}
function loadImage(pokemon) {
  var pokemonImage = document.getElementById("pokemonImage");
  pokemonImage.src = "images/" + pokemon + ".png";
}
// owner = {
//     name: trainerName,
//     ownedPokemon: pokemonGet,
//     function() {
//       var arrayContents = 0;
//       for (arrayContents = 0; arrayContents < pokemonGet.length; arrayContents++)
//       alert(JSON.stringify(pokemonGet[arrayContents]));
//     }
// }
pokemonGet = [];
totalPokemon = 0;

function retPokemon() {
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

function retPokemon2() {
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
      document.getElementById("trainerName").innerHTML = myObj.name;
      // document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
      // document.getElementById("pokeType2").innerHTML = myObj.types[1].type.name;
      document.getElementById("atk").innerHTML = myObj.stats[4].base_stat;
      document.getElementById("def").innerHTML = myObj.stats[3].base_stat;
      document.getElementById("hp").innerHTML = "This pokemon's HP is " + myObj.stats[5].base_stat

      // if (myObj.types[0].slot == 2) {
      // document.getElementById("pokeType2").innerHTML = myObj.types[1].type.name;
      // // responsiveVoice.cancel();
      //   retPokemon2();
      //       // responsiveVoice.speak(myObj.name);
      //       // responsiveVoice.speak(myObj.types[0].type.name + "type");
      //       // responsiveVoice.speak("Also" + myObj.types[1].type.name + "type.");
      //       //   responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
      // }
      //   else {
      //     document.getElementById("pokeType2").innerHTML = "Pokemon Type";
      //     // responsiveVoice.cancel();
      //     retPokemon();
      // responsiveVoice.speak(myObj.name);
      // pokeType: responsiveVoice.speak(myObj.types[0].type.name + "type");
      //   responsiveVoice.speak(document.getElementById("abilityBox").innerHTML);
      // }
      loadImage(pokemon);
      getBio(pokemon);
      appear();
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
