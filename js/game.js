let level = 1;
let exp = 0;
let lvlUpCondition = 200;

function levelUpgrade(givenExp) {
  exp += givenExp;
  if (exp >= lvlUpCondition) {
    console.log("Up");
    ++level;
    if (exp == 200) {
      exp = 0;
    }
  }
  console.log(level);
  console.log(exp);
}

let elem = document.querySelector(".progress__line");
let btn = document.querySelector(".button");
let exp__see = document.querySelector(".exp__see");
let lvl__see = document.querySelector(".level__see");

let width = 0;

function progressStatus() {
  if (width > 399) {
    width = 0;
    audio.play();
  } else {
    width += 40;
    elem.style.width = width + "px";
    levelUpgrade(20);
    lvl__see.innerHTML = "YOUR LEVEL : " + level;
    audio2.play();
  }
}

function randomPosition() {
  let min = Math.ceil(1);
  let max = Math.floor(1400);
  let min2 = Math.ceil(1);
  let max2 = Math.floor(500);
  let result = Math.floor(Math.random() * (max - min) + min);
  let result2 = Math.floor(Math.random() * (max2 - min2) + min2);
  btn.style.cssText = 'position: absolute; width: 50px; height: 50px; border-radius: 50%;'
  btn.style.left = result + 'px'
  btn.style.top = result2 + 'px'
}
randomPosition()


let audio = new Audio();
audio.preload = 'auto';
audio.src = './uplvl.mp3';

let audio2 = new Audio();
audio2.preload = 'auto';
audio2.src = './ball.mp3';


