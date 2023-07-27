class Game {
  constructor() {
    this.character = new Character();

    this.randomQuest = Math.floor(Math.random() * questsAndAnswers.length);
    this.quest = new Quest(this.randomQuest);

    this.correctAnswer = questsAndAnswers[this.randomQuest].correctAnswer;

    this.answerArr = [];

    this.isGameOn = true;
    this.isWinCon = true;

    this.counter = 0;

    this.onGameAudio = new Audio("./sounds/track1.mp3");
    this.onGameAudio.play();
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverNode.style.display = "flex";
  }

  answerSpawn = (num) => {
    if (this.answerArr.length < 3) {
      this.answerArr.push(
        new Answers(questsAndAnswers[num].answer[0], 600, 340)
      );
      this.answerArr.push(
        new Answers(questsAndAnswers[num].answer[1], 600, 500)
      );
      this.answerArr.push(
        new Answers(questsAndAnswers[num].answer[2], 600, 670)
      );
    }
  };

  buttonCollision = () => {
    this.answerArr.forEach((eachAnswer) => {
      if (
        this.character.x < eachAnswer.x + eachAnswer.w &&
        this.character.x + this.character.w > eachAnswer.x &&
        this.character.y < eachAnswer.y + eachAnswer.h &&
        this.character.y + this.character.h > eachAnswer.y
      ) {
        if (
          eachAnswer.num === this.correctAnswer
        ) {
          this.isWinCon = true;
          this.counter++;
          console.log("correcto" + this.counter);
        }else {
          this.gameOver();
        }
      }
    });
  };

  correctAnswer = () => {
    if (this.answerArr === questsAndAnswers[this.randomQuest].correctAnswer) {
      return true;
    } else {
      return false;
    }
  };

  floorCollision = () => {
    if (this.character.y > 670) {
      this.character.y = 670;
    }
  };

  gameLoop = () => {
    console.log("hola")
    
    this.answerSpawn(this.randomQuest);
    this.buttonCollision();
    this.character.updatePosition();
    this.character.gravityEffect();

    this.floorCollision();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }else {
      this.onGameAudio.pause();
    }
  };
}
