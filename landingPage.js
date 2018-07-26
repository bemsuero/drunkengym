console.log('linked')

pokemonPage = {
  trainerWalia: "images/" + "trainerWalia.png",
  trainerBen: "images/" + "trainerBen.png",
  trainerJerry: "images/" + "trainerJerry.png",
  trainerX: "images/" + "trainerStrewbsMissing.png"
  // haunter: "images/" + "haunter.png",
  // giratina: "images/" + "giratina.png",
  // marshadow: "images/" + "marshadow.png",
  // sceptile: "images/" + "sceptile.png",
  // serperior: "images/" + "serperior.png",
  // quilladin: "images/" + "quilladin.png",
  // lucario: "images/" + "lucario.png",
  // metagross: "images/" + "metagross.png",
  // megnezone: "images/" + "megnezone.png"
}



trainerBios = {
  bioWalia: "26th son of a farmer named Ralph he doesn't come from wealth in any way shape or form but has one of the most promising future of all. He started one of the biggest franchises in the Pokemon Industry. Inventor of the Pokeball Case holder. Seeing an emerging market in the iPhone case market he applied this idea and now he a multibillionaire mogul. He is now retired in the Bahamas and spends his free time playing bingo and dating super models. Other than that he lives a pretty humble life. ",
  bioJerry:"Commited to being the best he has devoted his life to becoming the best pokemon trainer he has caught them all. He breeds them, forming the strongest genetic composition for a pokemon making them better than the would be in the wild. He is a monotype steel type Pokemon trainer. A champion of champions. As if the life of being the best wasn't enough he honestly just wants to retire to design clothes and make music. The life of being the best is constantly stressful. On weekends he rewatches episodes of GOT or goes to the movies.",
  bioBen: "He's generous, innocent, humorous and perhaps a little too rude. But what'd you expect from somebody with his position. He was born in a middle class family in a developed town. He lived happily until he was about 10 years old, but at that point things changed. He moved in with a friend and was gaining a little fame. Through hard work, he is trying to help others in a remarkable world. But with his bravery and sense of humor, there's nothing to stop him from doing anything. He could quickly become a great leader, perhaps even of the nation.",
  bioX: "??? ??? ??? ???? ???? ???? ???? ???? ???? ???? ????? ???? ????"
}
// console.log(pokeBios.bioHaunter)



//


var trainerWalia = document.getElementById("trainerWalia");
trainerWalia.src = pokemonPage.trainerWalia;

var trainerBen = document.getElementById("trainerBen");
trainerBen.src = pokemonPage.trainerBen;

var trainerJerry = document.getElementById("trainerJerry");
trainerJerry.src = pokemonPage.trainerJerry;

var trainerX = document.getElementById("trainerX");
trainerX.src = pokemonPage.trainerX;

var pokemonBios

function mysteryTrainer() {
  alert("This mysterious trainer is said to be a legendary character. Not much is known about him.")
}
// //carsousel workings
var carousel = document.querySelector('.carousel');
var cellCount = 4;
selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-160px) rotateY(' + angle + 'deg)';
};

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
  checkBio();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
  checkBio();
});

var personalStory = document.getElementById("personalStory");
personalStory.innerHTML = trainerBios.bioWalia;

function checkBio() {
  if (selectedIndex == -12) {
    personalStory.innerHTML = trainerBios.bioWalia;
  }
  if (selectedIndex == -11) {
    personalStory.innerHTML = trainerBios.bioJerry;
  }
   if (selectedIndex == -10) {
    personalStory.innerHTML = trainerBios.bioBen;
  }
   if (selectedIndex == -9) {
    personalStory.innerHTML = trainerBios.bioX;
  }
  if (selectedIndex == -8) {
    personalStory.innerHTML = trainerBios.bioWalia;
  }
  if (selectedIndex == -7) {
    personalStory.innerHTML = trainerBios.bioJerry;
  }
   if (selectedIndex == -6) {
    personalStory.innerHTML = trainerBios.bioBen;
  }
   if (selectedIndex == -5) {
    personalStory.innerHTML = trainerBios.bioX;
  }
  if (selectedIndex == -4) {
    personalStory.innerHTML = trainerBios.bioWalia;
  }
  if (selectedIndex == -3) {
    personalStory.innerHTML = trainerBios.bioJerry;
  }
   if (selectedIndex == -2) {
    personalStory.innerHTML = trainerBios.bioBen;
  }
   if (selectedIndex == -1) {
    personalStory.innerHTML = trainerBios.bioX;
  }
if (selectedIndex == 0) {
  personalStory.innerHTML = trainerBios.bioWalia;
}
if (selectedIndex == 1) {
  personalStory.innerHTML = trainerBios.bioJerry;
}
 if (selectedIndex == 2) {
  personalStory.innerHTML = trainerBios.bioBen;
}
 if (selectedIndex == 3) {
  personalStory.innerHTML = trainerBios.bioX;
}
if (selectedIndex == 4) {
  personalStory.innerHTML = trainerBios.bioWalia;
}
if (selectedIndex == 5) {
  personalStory.innerHTML = trainerBios.bioJerry;
}
 if (selectedIndex == 6) {
  personalStory.innerHTML = trainerBios.bioBen;
}
 if (selectedIndex == 7) {
  personalStory.innerHTML = trainerBios.bioX;
}
if (selectedIndex == 8) {
  personalStory.innerHTML = trainerBios.bioWalia;
}
if (selectedIndex == 9) {
  personalStory.innerHTML = trainerBios.bioJerry;
}
 if (selectedIndex == 10) {
  personalStory.innerHTML = trainerBios.bioBen;
}
 if (selectedIndex == 11) {
  personalStory.innerHTML = trainerBios.bioX;
}
}
