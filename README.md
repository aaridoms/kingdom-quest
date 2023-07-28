# Kingdom Quest ![Game-loop](./images/character.png)

## [The Game](https://aaridoms.github.io/kingdom-quest/)

![Game-loop](./images/logo.png)

# Description ![Game-loop](./images/character.png)

- Kingdom Quest is a game where player has to answer a series of questions correctly without failing.

# Main Functionalities ![Game-loop](./images/character.png)

- Player movement by clicking `left`, `right`, `up`.
- Player can `jump` and hit the answer.
- Player win if answer `5` questions correcty without failing.
- Player loses if he fails `only 1` question.

# Technologies Used ![Game-loop](./images/character.png)

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- JS Audio() and images

# States ![Game-loop](./images/character.png)

- Start Screen
- Game Screen
- Win Screen
- Game Over Screen

# Project Structure ![Game-loop](./images/character.png)

## character.js ![Game-loop](./images/character.png)

- Character()

    - DOM Node Creation
    - this.x
    - this.y
    - this.w
    - this.h
    - gravityEffect()
    - moveUp()
    - moveLeft()
    - moveRight()
    - updatePosition()

## quest.js ![Game-loop](./images/character.png)

- Quest(num)

    - DOM Node Creation
    - this.x
    - this.y
    - this.w
    - this.h

## answer.js ![Game-loop](./images/character.png)

- Answer(num, posy, posx)

    - DOM Node Creation
    - this.num
    - this.x
    - this.y
    - this.w
    - this.h

## game.js ![Game-loop](./images/character.png)

- Game()

    - this.character
    - this.randomQuest
    - this.quest
    - this.correctAnswer
    - this.answerArr
    - this.answerSpawn
    - this.isGameOn
    - this.isWinCon
    - this.isCol
    - this.counter
    - this.onGameAudio
    - this.trueAudio
    - this.looseAudio
    - this.winSoundAudio
    - this.onGameAudio
    - this.onGameAudio
    - this.looseAudio
    - this.winSoundAudio.volume
    - gameOver()
    - winCondition()
    - answerSpawn(num)
    - buttonCollision()
    - regenAnswers()
    - correctAnswer()
    - floorCollision()
    - gameLoop()

## main.js ![Game-loop](./images/character.png)

- startGame()
- restartGame()
- winRestartGame()
- addEventListener

## data.js ![Game-loop](./images/character.png)

- `data.js` contains an `array` with all the data for the game to work.

# Extra Links ![Game-loop](./images/character.png)

|  Slides ![Game-loop](./images/character.png) | Deploy ![Game-loop](./images/character.png)|
|---|---|
| [Link](#) | [Link](https://aaridoms.github.io/kingdom-quest/) |