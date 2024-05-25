class GameLoop {
  constructor() {
    this.lastFrameTimeMs = 0;
    this.maxFPS = 60;
    this.delta = 0;
    this.timestep = 1000 / this.maxFPS;
    this.update = this.update.bind(this);
    this.canvas = document.querySelector("#canvas");
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = 384;
    this.canvasHeight = 682;
    this.frames = 0;
  }

  update(timestamp) {
    if (timestamp < this.lastFrameTimeMs + (1000 / this.maxFPS)) {
      requestAnimationFrame(this.update);
      return;
    }

    this.delta += timestamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timestamp;

    while (this.delta >= this.timestep && !colision.isColided) {
      this.delta -= this.timestep;
      this.gameUpdate();
      this.frames++
    }

    requestAnimationFrame(this.update);
  }

  gameUpdate() {
    cenary.update();
    ground.update();
    tubes.update();
    bird.update();
    colision.update();
  }

  get sprite() {
    const spriteImage = new Image();
    spriteImage.src = "./img/sprite.png";
    return spriteImage;
  }

  canvasSize() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }

  init() {
    this.canvasSize();
    requestAnimationFrame(this.update);
  }
}

const gameLoop = new GameLoop();
gameLoop.init();
