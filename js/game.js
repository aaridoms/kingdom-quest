class Game {
  constructor() {
    this.character = new Character();
    this.quest = new Quest();

    this.isGameOn = true;
    this.isWinCon = true;
  }

  floorCollision = () => {
    if (this.character.y > 670) {
      this.character.y = 670;
    }
  }

  gameLoop = () => {
    // console.log("start game")
    
    this.character.updatePosition();
    this.character.gravityEffect();

    this.floorCollision();



    if (this.isGameOn === true) {
        
      requestAnimationFrame(this.gameLoop);
    }
  };
}
