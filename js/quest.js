class Quest {
  constructor() {
    let quests = [
      {
        quest: "¿Cuál es mi color favorito?",
        answer: ["rojo", "azul", "verde"],
        correctAnswer: "rojo",
      },
      {
        quest: "¿Cuál es mi comida favorita?",
        answer: ["pizza", "hamburguesa", "pasta"],
        correctAnswer: "pizza",
      },
      {
        quest: "¿Cuál es mi animal favorito?",
        answer: ["perro", "gato", "pez"],
        correctAnswer: "perro",
      },
      {
        quest: "¿Cuál es mi peli favorita?",
        answer: ["Harry Potter", "El señor de los anillos", "Star Wars"],
        correctAnswer: "Harry Potter",
      },
    ];

    let randomQuest = Math.floor(Math.random() * quests.length);

    this.questNode = document.createElement("div");
    this.questNode.textContent = quests[randomQuest].quest;
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
