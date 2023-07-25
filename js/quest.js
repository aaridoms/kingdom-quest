class Quest {
  constructor(num) {
    
    this.randomQuest = num;

    this.questNode = document.createElement("div");
    this.questNode.textContent = questsAndAnswers[this.randomQuest].quest;
    this.questNode.id = "quest";
    gameBoxNode.append(this.questNode);

    this.x = 30;
    this.y = 100;
    this.w = 500;
    this.h = 100;

    // * Tamano de la quest
    this.questNode.style.width = `${this.w}px`;
    this.questNode.style.height = `${this.h}px`;

    // * Posicion de la quest
    this.questNode.style.position = "absolute";
    this.questNode.style.top = `${this.y}px`;
    this.questNode.style.left = `${this.x}%`;
  }
}
