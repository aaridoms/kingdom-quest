class Game {
  constructor() {
    this.character = new Character();

    const randomQuest = Math.floor(Math.random() * questsAndAnswers.length);
    this.quest = new Quest(randomQuest);

    console.log(randomQuest)


    // this.response = new Answers(randomQuest);
    // console.log(questsAndAnswers[randomQuest].answer);
    // console.log(questsAndAnswers[randomQuest].correctAnswer);
    this.answer1 = new Answers(questsAndAnswers[randomQuest].answer[0]);
    this.answer2 = new Answers(questsAndAnswers[randomQuest].answer[1]);
    this.answer3 = new Answers(questsAndAnswers[randomQuest].answer[2]);

    this.answerArr = [];

    this.isGameOn = true;
    this.isWinCon = true;
  }

  // answerSpawn = () => {
  //   if (this.answerArr.length === 0 && this.answerArr.length < 3) {
  //     for(let i = 0; i < this.answerArr.length; i++) {
  //       this.answerArr.push(new Answers(i));
  //     }
  //   }
  // }

  floorCollision = () => {
    if (this.character.y > 670) {
      this.character.y = 670;
    }
  };

  gameLoop = () => {
    // this.answerSpawn();
    this.character.updatePosition();
    this.character.gravityEffect();

    this.floorCollision();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
