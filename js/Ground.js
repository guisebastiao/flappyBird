class Ground {
  constructor() {
    this.groundWidth = 448;
    this.groundHeight = 149;
    this.posX = 0;
  }

  moviment() {
    this.posX < -this.groundWidth ? this.posX = 0 : this.posX -= 0.5;
  }

  draw() {
    gameLoop.ctx.drawImage(gameLoop.sprite, 2336, 0, 1344, 448, this.posX, gameLoop.canvasHeight - this.groundHeight, this.groundWidth, this.groundHeight);
    gameLoop.ctx.drawImage(gameLoop.sprite, 2336, 0, 1344, 448, this.posX + this.groundWidth, gameLoop.canvasHeight - this.groundHeight, this.groundWidth, this.groundHeight);
  }

  update() {
    this.draw();
    this.moviment();
  }
}

const ground = new Ground();
