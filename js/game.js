class Game {
  constructor() {
    this.character = new Character();

    this.randomQuest = Math.floor(Math.random() * questsAndAnswers.length);
    this.quest = new Quest(this.randomQuest);

    // this.response = new Answers(randomQuest);
    // console.log(questsAndAnswers[randomQuest].answer);
    // console.log(questsAndAnswers[randomQuest].correctAnswer);
    // this.answer1 = new Answers(questsAndAnswers[randomQuest].answer[0], 600, 30);
    // this.answer2 = new Answers(questsAndAnswers[randomQuest].answer[1], 600, 50);
    // this.answer3 = new Answers(questsAndAnswers[randomQuest].answer[2], 600, 70);

    this.answerArr = [];

    this.isGameOn = true;
    this.isWinCon = true;
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
        console.log("hola")
      }
    });
  }

  floorCollision = () => {
    if (this.character.y > 670) {
      this.character.y = 670;
    }
  };

  gameLoop = () => {
    this.answerSpawn(this.randomQuest);
    this.buttonCollision();
    this.character.updatePosition();
    this.character.gravityEffect();

    this.floorCollision();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
