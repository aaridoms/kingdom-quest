class Character {

    constructor() {

        this.characterNode = document.createElement("img")
        this.characterNode.src = "./images/character.png";
        gameBoxNode.append(this.characterNode);

        this.x = 50;
        this.y = 670;
        this.w = 80;
        this.h = 80;

        // * Tamano del PJ
        this.characterNode.style.width = `${this.w}px`;
        this.characterNode.style.height = `${this.h}px`;

        // * Posicion del PJ
        this.characterNode.style.position = "absolute";
        this.characterNode.style.top = `${this.y}px`;
        this.characterNode.style.left = `${this.x}px`
    }


}