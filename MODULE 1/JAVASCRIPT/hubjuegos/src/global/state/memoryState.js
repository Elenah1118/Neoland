// //un estado tiene dos funciones una de lectura y otra de escritura(get y set)
// const dataState ={
//     seconds: 0,
//     minutes: 0,
//     movesCount: 0,
//     winCount: 0,
// };

// export const getStateMemory = (typeOfValue)=>{
// switch (typeOfValue){
//     case "seconds":
//         return dataState.secons;
//     case "minutes":
//         return dataState.minutes;
//     case "smovesCount":
//         return dataState.movesCount;
//     case "swinCount":
//         return dataState.winCount;
// }
// }
// //set es para darle valor a una propiedad

// export const setStateMemory = (typeOfValue, setValue)=>{
// switch (typeOfValue){
//     case "seconds":
//          dataState.secons = setValue;
//          break;
//     case "minutes":
//         dataState.minutes = setValue;
//         break;
//     case "smovesCount":
//         dataState.movesCount = setValue;
//         break;
//     case "swinCount":
//         ataState.winCount = setValue;
//         break;
// }
// }


let dataState = {
  seconds: 0,
  minutes: 0,
  movesCount: 0,
  winCount: 0,
  cards: null,
  interval: null,
  firstCard: false,
  secondCard: false,
  stopGame: null,
  firstCardValue: null,
  secondCardValue: null,
};
//funcion get solo me retorna la infotmacion
//funcion set que me dice donde me quiero meter y donde esta la informacion, no me devuelve nada
export const getStateMemory = (typeOfValue) => {
  switch (typeOfValue) {
    case "firstCardValue":
      return dataState.firstCardValue;
    case "secondCardValue":
      return dataState.secondCardValue;
    case "seconds":
      return dataState.seconds;
    case "minutes":
      return dataState.minutes;
    case "movesCount":
      return dataState.movesCount;
    case "winCount":
      return dataState.winCount;
    case "all":
      return dataState;

    case "cards":
      return dataState.cards;
    case "interval":
      return dataState.interval;
    case "firstCard":
      return dataState.firstCard;
    case "secondCard":
      return dataState.secondCard;

    case "stopGame":
      return dataState.stopGame;
  }
};

export const setStateMemory = (typeOfValue, setValue) => {
  switch (typeOfValue) {
    case "firstCardValue":
      dataState.firstCardValue = setValue;
      break;
    case "secondCardValue":
      dataState.secondCardValue = setValue;
      break;
    case "seconds":
      dataState.seconds = setValue;
      break;
    case "minutes":
      dataState.minutes = setValue;
      break;
    case "movesCount":
      dataState.movesCount = setValue;
      break;
    case "winCount":
      dataState.winCount = setValue;
      break;
    case "cards":
      dataState.cards = setValue;
      break;
    case "interval":
      dataState.interval = setValue;
      break;
    case "firstCard":
      dataState.firstCard = setValue;
      break;
    case "secondCard":
      dataState.secondCard = setValue;
      break;

    case "stopGame":
      dataState.stopGame = setValue;
      break;

    case "reset":
      dataState = {
        seconds: 0,
        minutes: 0,
        movesCount: 0,
        winCount: 0,
        cards: null,
        interval: dataState.interval,
        firstCard: false,
        secondCard: false,
        stopGame: null,
        firstCardValue: null,
        secondCardValue: null,
      };
  }
};
 
