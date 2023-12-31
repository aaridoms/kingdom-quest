const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");

const gameScreenNode = document.querySelector("#game-screen") ;
const gameBoxNode = document.querySelector("#game-box");

const gameOverNode = document.querySelector("#game-over-screen");
const gameOverBtnNode = document.querySelector("#restart-btn");

const answerBtnNode = document.querySelector("#answer-btn");

const winScreenNode = document.querySelector("#win-screen");
const winBtnNode = document.querySelector("#playagain-btn");

let gameObj;
let jumpSound = new Audio("./sounds/jump.mp3");


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

const winRestartGame = () => {
    winScreenNode.style.display = "none";
    startScreenNode.style.display = "flex";

    gameBoxNode.innerHTML = `<div id="answer-btn"></div>`;
}

startBtnNode.addEventListener("click", startGame);
gameOverBtnNode.addEventListener("click", restartGame);
winBtnNode.addEventListener("click", winRestartGame);
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        jumpSound.play();
        gameObj.character.moveUp();
    }else if(e.key === "ArrowLeft") {
        gameObj.character.moveLeft();
    }else if(e.key === "ArrowRight") {
        gameObj.character.moveRight();
    }
});