// import "./Memory.css";


// const totalCard = 12;
// let cards =[];
// let selectedCards = [];
// let valuesUsed = [];
// let currentMove = 0;


// const template = () =>`
// <div id="wrapper"></div>
// <div id="game">
// <div class="card">
//  <div class="back"></div>
//  <div class="face"></div>
//  </div>
//  </div>`;


//  function activate(e) {
//     if (currentMove < 2) {
//         e.target.classList.add('activate');

//         if (!selectedCards[0] || selectedCards[0] !== e.target ) {
//             selectedCards.push(e.target);

//             if (++currentMove ==2) {
//                 if (selectedCards[0].querySelectorAll('.face')[0].innerHTML == selectedCards[1].querySelectorAll('.face')[0].innerHTML) {
//                     selectedCards=[];
//                     currentMove = 0;
//                 }
//                 else{
//                     setTimeout(() => {
//                         selectedCards[0].classList.remove('active');
//                          selectedCards[1].classList.remove('active');
//                          selectedCards = [];
//                          currentMove = 0;
//                     }, 600);

//                     }
//                 }
//                 }
//             }
//         }
    



// document.addEventListener("DOMContentLoaded", function() {
//     for (let i = 0; i < totalCard; i++) {
//         let div = document.createElement('div');
//         div.innerHTML = template();
//         cards.push(div);
//         document.querySelector('#game').append(cards[i]);
//     }
// });

// const starGame = () => {
//   const startButton = document.getElementById("start");
//   const stopButton = document.getElementById("stop");

//   startButton.addEventListener("click", () => {
//     setStateMemory("interval", setInterval(timeGenerator, 1000));
//     Swal.fire({
//       position: "center",
//       title: "VAMOS!!",
//       imageUrl:
//         "https://media1.tenor.com/m/Mrvq3gEsvvAAAAAC/que-comiencen-los-juegos-mojo-jojo.gif",
//       imageHeight: 300,
//       imageAlt: "A tall image",
//       showConfirmButton: false,
//       timer: 1000,
//     });
//     setTimeout(() => {
//       setStateMemory("movesCount", 0);
//       setStateMemory("seconds", 0);
//       setStateMemory("minutes", 0);
//       const controls = document.querySelector(".controls-c");
//       controls.classList.add("hide");
//       stopButton.classList.remove("hide");
//       startButton.classList.add("hide");

//       const moves = document.getElementById("moves");
//       moves.innerHTML = `<span>Moves:</span> ${getStateMemory("movesCount")}`;
//       init();
//     }, 900);
//   });

//   // --------- BOTON DE STOP  ---------------
//   const handleStop = () => {
//     const time = document.getElementById("time");
//     time.innerHTML = "";
//     clearInterval(getStateMemory("interval"));
//     const controls = document.querySelector(".controls-c");
//     controls.classList.remove("hide");
//     stopButton.classList.add("hide");
//     startButton.classList.remove("hide");
//   };

//   setStateMemory("stopGame", handleStop);
//   stopButton.addEventListener("click", handleStop);
// };

// const init = () => {
//   const result = document.getElementById("result");
//   result.innerText = "";
//   setStateMemory("winCount", 0);
//   let cardValues = generateRandom();
//   generador(cardValues);
// };











// // const template = () => `
// // <div id="containerMemory"> 
// //     <div class="wrapper">
// //       <div class="stats-c">
// //         <div id="moves"></div>
// //         <div id="time"></div>
// //       </div>
// //       <div class="game-c"></div>
// //       <button id="stop" class="hide">Stop Game</button>
// //     </div>
// //     <div class="controls-c">
// //       <div class="portada"><img src="./sourceMemory/portada.gif"></div>
// //       <p id="result"></p>
// //       <button id="start"><img src="./sourceMemory/star_game.gif"></button>
// // </div></div>`;


// export const PrintMemoryPage = ()=>  {
//     document.querySelector("main").innerHTML = template();
//     activate
// };



import { getStateMemory, setStateMemory } from "../../global/state/memoryState";
import { generador, generateRandom, timeGenerator } from "../../utils";
import Swal from "sweetalert2";

import "./Memory.css";

const template = () => `
<div id="containerMemory"> 
    <div class="wrapper">
      <div class="stats-c">
        <div id="moves"></div>
        <div id="time"></div>
      </div>
      <div class="game-c"></div>
      <button id="stop" class="hide">Stop Game</button>
    </div>
    <div class="controls-c">
      <div class="portada"><img src="./sourceMemory/portada.gif"></div>
      <p id="result"></p>
      <button id="start"><img src="./sourceMemory/star_game.gif"></button>
</div></div>`;

const starGame = () => {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");

  startButton.addEventListener("click", () => {
    setStateMemory("interval", setInterval(timeGenerator, 1000));
    Swal.fire({
      position: "center",
      title: "¡Buena suerte!",
      imageUrl:
        "https://media.tenor.com/gnniMKPzebYAAAAM/smurfs-lets-go.gif",
      imageHeight: 300,
      imageAlt: "A tall image",
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      setStateMemory("movesCount", 0);
      setStateMemory("seconds", 0);
      setStateMemory("minutes", 0);
      const controls = document.querySelector(".controls-c");
      controls.classList.add("hide");
      stopButton.classList.remove("hide");
      startButton.classList.add("hide");

      const moves = document.getElementById("moves");
      moves.innerHTML = `<span>Moves:</span> ${getStateMemory("movesCount")}`;
      init();
    }, 900);
  });

  // --------- BOTON DE STOP  ---------------
  const handleStop = () => {
    const time = document.getElementById("time");
    time.innerHTML = "";
    clearInterval(getStateMemory("interval"));
    const controls = document.querySelector(".controls-c");
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
  };

  setStateMemory("stopGame", handleStop);
  stopButton.addEventListener("click", handleStop);
};

const init = () => {
  const result = document.getElementById("result");
  result.innerText = "";
  setStateMemory("winCount", 0);
  let cardValues = generateRandom();
  generador(cardValues);
};

//estmos pintando el teemple que es el que tiene todos los contenedores necesarios para que esto funciones
export const PrintMemoryPage = () => {
  document.querySelector("main").innerHTML = template();
  starGame();
};
