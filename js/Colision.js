class Colision {
  constructor() {
    this.isColided = false;
  }

  checking() {
    if (tubes.posX < (bird.posX + bird.width) && (tubes.posX + tubes.width) > bird.posX) {
      if (bird.posY <= (tubes.posyTubeTop + tubes.height) || (bird.posY + bird.height) > tubes.posyTubeBottom) {
        this.isColided = true;
        gameAudio.soundHit();
      }
    }

    if (gameLoop.canvasHeight < (bird.posY + bird.height) || bird.posY < 0) {
      this.isColided = true;
      gameAudio.soundHit();
    }
  }

  update() {
    this.checking();
  }
}

const colision = new Colision();
