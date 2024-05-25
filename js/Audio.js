class GameAudio {
  soundHit() {
    const hit = new Audio();
    hit.src = "./audio/hit.wav";
    hit.volume = 0.05;
    hit.play();
  }

  soundJump() {
    const jump = new Audio();
    jump.src = "./audio/jump.wav";
    jump.volume = 0.08;
    jump.play();
  }
}

const gameAudio = new GameAudio();
