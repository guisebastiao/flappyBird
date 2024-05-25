class Cenary {
  draw() {
    gameLoop.ctx.drawImage(gameLoop.sprite, 0, 0, 1152, 2048, 0, 0, gameLoop.canvasWidth, gameLoop.canvasHeight);
  }

  update() {
    this.draw();
  }
}

const cenary = new Cenary();
