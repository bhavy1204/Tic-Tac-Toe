console.log("Test");
const music = new Audio("music.mp3");
const turnSound = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");

let turn = "x";

const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

// Win condition
