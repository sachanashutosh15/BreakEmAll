export class InputHandler {
  constructor(paddle, game) {
    [...document.getElementsByClassName('button')].forEach(element => element.addEventListener("touchstart", (event) => {
      switch(event.target.id) {
        case 'leftBtn':
          paddle.moveLeft();
          break;
        case 'rightBtn':
          paddle.moveRight();
          break;
      }
    }));
    [...document.getElementsByClassName('button')].forEach(element => element.addEventListener("touchend", (event) => {
      switch(event.target.id) {
        case 'leftBtn':
          if(paddle.speed < 0) {
            paddle.stop();
          }
          break;
        case 'rightBtn':
          if(paddle.speed > 0) {
            paddle.stop();
          }
          break;
      }
    }));
    document.getElementById('start').addEventListener('click', () => {
      game.start();
      document.getElementById('start').style.display = 'none';
    });
    document.addEventListener('keydown', (event) => {
      switch(event.key) {
        case 'ArrowRight':
          paddle.moveRight(); 
          break;
        case 'ArrowLeft':
          paddle.moveLeft();
          break;
        case 'Escape':
          game.togglePause();
          break;
        case ' ':
          game.start();
          break;
      }
    })
    document.addEventListener('keyup', (event) => {
      switch(event.key) {
        case 'ArrowRight':
          if (paddle.speed > 0) {
            paddle.stop(); 
          }
          break;
        case 'ArrowLeft':
          if (paddle.speed < 0) {
            paddle.stop();
          }
          break;
      }
    })
  }
}