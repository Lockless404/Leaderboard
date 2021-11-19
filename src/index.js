import './style.css';
import NewPlayer from './newplaya';
import { moveToApi } from './api';

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

const getData = async () => {
  const pull = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ml0wfxegyFf06umHiVlI/scores/');

  const data = await pull.json();
  const dataOut = await data.result;
  Ui.render(dataOut);
};

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const score = document.querySelector('.inputScore').value;
  const name = document.querySelector('.inputName').value;
  const player = new NewPlayer(name, Number(score));
  moveToApi(player);
});

const refreshBtn = document.querySelector('.refreshBtn');
refreshBtn.addEventListener('click', () => {
  Ui.clearField();
  getData();
});