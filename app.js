console.log("Test");
const music = new Audio("music.mp3");
const turnSound = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");

let turn = "X";

const changeTurn = ()=>{

    return turn === "X"?"0":"X";
}

// Win condition

const checkWin = ()=>{

}

// main functioning of game 

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText=turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
        }
    });
});