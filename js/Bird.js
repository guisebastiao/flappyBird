class Bird {
  constructor() {
    this.posX = 50;
    this.posY = 50;
    this.width = 45;
    this.height = 32;
    this.weightGravity = 1.04;
    this.valueGravity = 1.4;
    this.positionSprite = [24, 248, 472];
    this.currentSprite = 0;
  }

  draw() {
    gameLoop.ctx.drawImage(gameLoop.sprite, this.positionSprite[this.currentSprite], 3928, 136, 96, this.posX, this.posY, this.width, this.height);

    if (gameLoop.frames % 12 === 0) {
      this.currentSprite >= 2 ? this.currentSprite = 0 : this.currentSprite++
    }
  }

  gravity() {
    if (this.valueGravity <= 8) {
      this.valueGravity *= this.weightGravity;
    }

    this.posY += this.valueGravity;
  }

  jump() {
    if (controls.spacePressed) {
      this.valueGravity = 1.4;
      this.posY -= 8;
    }
  }

  update() {
    this.draw();
    this.jump();
    this.gravity();
  }
}

const bird = new Bird();
