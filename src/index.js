import './style.css';
import NewPlayer from './newplaya';
import { moveToApi, getData } from './api';

export default class Ui {
  static render(players) {
    const listItems = document.querySelector('.list');
    players.forEach((player) => {
      listItems.innerHTML += `
      <li>
        <p>${player.user}:</p>
        <p> ${player.score}</p>
      </li>
      `;
    });
  }

  static clearField() {
    const listItems = document.querySelector('.list');
    listItems.innerHTML = '';
  }
}

const submitBtn = document.querySelector('.submitBtn');
const error = document.querySelector('.errorMsg');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const score = document.querySelector('.inputScore').value;
  const name = document.querySelector('.inputName').value;
  const player = new NewPlayer(name, Number(score));
  moveToApi(player);
  submitBtn.classList.add('Disabled');
  error.classList.add('appear');
});

const refreshBtn = document.querySelector('.refreshBtn');
refreshBtn.addEventListener('click', async () => {
  Ui.clearField();
  const dataOut = await getData();
  Ui.render(dataOut);
  submitBtn.classList.remove('Disabled');
  error.classList.remove('appear');
});