class Answers {
  constructor(num, posy, posx) {

    this.num = num;

    this.answerBtnNode = document.querySelector("#answer-btn");

    this.answerBtn1Node = document.createElement("div");
    this.answerBtn1Node.textContent = this.num;
    this.answerBtn1Node.className = "answer1";
    this.answerBtnNode.append(this.answerBtn1Node);

    this.x = posx;
    this.y = posy;
    this.w = 70;
    this.h = 55;


    
    // * Tamano de la quest
    this.answerBtn1Node.style.width = `${this.w}px`;
    this.answerBtn1Node.style.height = `${this.h}px`;

    // * Posicion de la quest
    this.answerBtn1Node.style.position = "absolute";
    this.answerBtn1Node.style.top = `${this.y}px`;
    this.answerBtn1Node.style.left = `${this.x}px`;


  }
}
