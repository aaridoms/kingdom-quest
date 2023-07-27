const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");

const gameScreenNode = document.querySelector("#game-screen") ;
const gameBoxNode = document.querySelector("#game-box");

const gameOverNode = document.querySelector("#game-over-screen");
const gameOverBtnNode = document.querySelector("#restart-btn");

const answerBtnNode = document.querySelector("#answer-btn");

let gameObj;
let jumpSound = new Audio("./sounds/jump.mp3");
let walkSound = new Audio("./sounds/walk.mp3");


const startGame = () => {

    startScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";

    gameObj = new Game();
    gameObj.gameLoop();
}

const restartGame = () => {
    gameOverNode.style.display = "none";
    startScreenNode.style.display = "flex";

    gameBoxNode.innerHTML = `<div id="answer-btn"></div>`;
}

startBtnNode.addEventListener("click", startGame);
gameOverBtnNode.addEventListener("click", restartGame);
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        jumpSound.play();
        gameObj.character.moveUp();
    }else if(e.key === "ArrowLeft") {
        // walkSound.play();
        gameObj.character.moveLeft();
    }else if(e.key === "ArrowRight") {
        // walkSound.play();
        gameObj.character.moveRight();
    }
});