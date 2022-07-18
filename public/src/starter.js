document.addEventListener('DOMContentLoaded', listen);

function listen() {
  let touchButton = document.getElementById('touch');
  let keyBoardButton = document.getElementById('keyBoard');
  touchButton.onclick = () => {
    document.getElementById('inputSelector').style.display = 'none';
    [...document.getElementsByClassName('button')].forEach(element => {
      element.style.display = 'inline-block';
    });
    document.getElementById('start').style.display = 'block';
  }
  keyBoardButton.onclick = () => {
    document.getElementById('inputSelector').style.display = 'none';
  }
}