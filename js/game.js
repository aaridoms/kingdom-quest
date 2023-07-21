class Game {
  constructor() {
    this.character = new Character();

    this.isGameOn = true;
  }

  gameLoop = () => {








    if (this.isGameOn === true) {
        console.log("hola")
      requestAnimationFrame(this.gameLoop);
    }
  };
}
