class Controls {
  constructor() {
    this.spacePressed = false;
    this.isPressed = false;
    this.maxTimeJump = 150;
  }

  handleKeyDown(e) {
    if (e.keyCode === 32 && !this.spacePressed && !this.isPressed) {
      this.spacePressed = true;
      this.isPressed = true;

      if (!colision.isColided) {
        gameAudio.soundJump();
      }

      setTimeout(() => {
        this.spacePressed = false;
      }, this.maxTimeJump);
    }
  }

  handleKeyUp(e) {
    if (e.keyCode === 32) {
      this.isPressed = false;
    }
  }

  init() {
    document.addEventListener("keydown", e => this.handleKeyDown(e));
    document.addEventListener("keyup", e => this.handleKeyUp(e));
  }
}

const controls = new Controls();
controls.init();
