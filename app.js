console.log("Test");
const music = new Audio("music.mp3");
const turnSound = new Audio("ting.mp3");
const gameOverSound = new Audio("gameover.mp3");
let gameover = false;

let turn = "X";

const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}

// Win condition

const checkWin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        // horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ) {
            document.querySelector(".info").innerText = " '"+ boxtexts[e[0]].innerText + "' WON ! ";
            gameover = true;
            gameOverSound.play();
            // music.play();
        }
    });
}

// main functioning of game 

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnSound.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});