const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");

const gameScreenNode = document.querySelector("#game-screen") ;
const gameBoxNode = document.querySelector("#game-box");

const gameOverNode = document.querySelector("#game-over-screen");
const gameOverBtnNode = document.querySelector("#restart-btn");

let gameObj;


const startGame = () => {
    console.log("Iniciando el juego");

    startBtnNode.style.display = "none";
    gameScreenNode.style.display = "flex";

    gameObj = new Game();
    gameObj.gameLoop();
}

startBtnNode.addEventListener("click", startGame);