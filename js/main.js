const startBtnNode = document.querySelector("#start-btn");
const startScreenNode = document.querySelector("#start-screen");

const gameScreenNode = document.querySelector("#game-screen") ;
const gameBoxNode = document.querySelector("#game-box");

const gameOverNode = document.querySelector("#game-over-screen");
const gameOverBtnNode = document.querySelector("#restart-btn");

const answerBtnNode = document.querySelector("#answer-btn");

let gameObj;


const startGame = () => {

    startScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";

    gameObj = new Game();
    gameObj.gameLoop();
}

startBtnNode.addEventListener("click", startGame);
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        gameObj.character.moveUp();
    }else if(e.key === "ArrowLeft") {
        gameObj.character.moveLeft();
    }else if(e.key === "ArrowRight") {
        gameObj.character.moveRight();
    }
});