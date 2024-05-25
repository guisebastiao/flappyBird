class Tubes {
  constructor() {
    this.width = 69;
    this.height = 426;
    this.posX = 384;
    this.spaceBetweenTubes = 65;
    this.randomTubePosition = 0;
    this.maxRandom = 90;
  }

  get posyTubeTop() {
    return (((gameLoop.canvasHeight / 2) - this.height) - this.spaceBetweenTubes) + this.randomTubePosition;
  }

  get posyTubeBottom() {
    return ((gameLoop.canvasHeight / 2) + this.spaceBetweenTubes) + this.randomTubePosition;
  }

  randomPosition() {
    this.randomTubePosition = Math.floor(Math.random() * (this.maxRandom - -this.maxRandom + 1)) + -this.maxRandom;
  }

  movimentTubes() {
    if (this.posX <= -this.width) {
      this.randomPosition();
      this.posX = 384;
    } else {
      this.posX -= 1;
    }
  }

  draw() {
    gameLoop.ctx.drawImage(gameLoop.sprite, 448, 2584, 208, 1280, this.posX, this.posyTubeTop, this.width, this.height);
    gameLoop.ctx.drawImage(gameLoop.sprite, 672, 2584, 208, 1280, this.posX, this.posyTubeBottom, this.width, this.height);
  }

  update() {
    this.draw();
    this.movimentTubes();
  }
}

const tubes = new Tubes();
