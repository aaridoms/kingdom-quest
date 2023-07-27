class Game {
  constructor() {
    this.character = new Character();

    this.randomQuest = Math.floor(Math.random() * questsAndAnswers.length);
    this.quest = new Quest(this.randomQuest);

    this.correctAnswer = questsAndAnswers[this.randomQuest].correctAnswer;

    this.answerArr = [];
    this.answerSpawn(this.randomQuest);

    this.isGameOn = true;
    this.isWinCon = false;
    this.isCol = true;

    this.healthNode = document.querySelector("#health");
    this.health = 3;
    this.counter = 0;

    this.onGameAudio = new Audio("./sounds/track1.mp3");
    this.onGameAudio.play();
    this.onGameAudio.volume = 0.1;
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverNode.style.display = "flex";
  };

  winCondition = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    winScreenNode.style.display = "flex";
  };

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
        this.character.y + this.character.h > eachAnswer.y &&
        this.isCol === true
      ) {
        if (eachAnswer.num === this.correctAnswer) {
          this.regenAnswers();
          this.counter++;
          if(this.counter === 3) {
            this.winCondition();
          }
        } else {
          this.gameOver();
          // this.health--;
          // this.healthNode.innerHTML = this.health;
          // if (this.health === 0) {
          //   this.gameOver();
          // }  
        }
      }
    });
  };

  regenAnswers = () => {
    answerBtnNode.innerHTML = "";
    this.isCol = false;
    this.answerArr = [];
    this.randomQuest = Math.floor(Math.random() * questsAndAnswers.length);
    this.quest = new Quest(this.randomQuest);
    this.answerSpawn(this.randomQuest);
    this.correctAnswer = questsAndAnswers[this.randomQuest].correctAnswer;
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
      this.isCol = true;
    }
  };

  gameLoop = () => {
    this.buttonCollision();
    this.character.updatePosition();
    this.character.gravityEffect();
    this.floorCollision();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    } else {
      this.onGameAudio.pause();
    }
  };
}
