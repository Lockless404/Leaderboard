import './style.css';
import NewPlayer from './newplaya';
import Api from './api';

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
    // for (let i = 0; i < players.length; i += 1) {
    //   listItems.innerHTML = `
    // //   <li>
    // //     <p>${players[i].user}</p>
    // //     <p>${players[i].score}</p>
    // //   </li>
    // //   `;
    // }
  }

  static clearField() {
    const listItems = document.querySelector('.list');
    listItems.innerHTML = '';
  }
}

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const score = document.querySelector('.inputScore').value;
  const name = document.querySelector('.inputName').value;
  const player = new NewPlayer(name, Number(score));
  Api.moveToApi(player);
});

const refreshBtn = document.querySelector('.refreshBtn');
refreshBtn.addEventListener('click', () => {
  Ui.clearField();
  Api.getData();
});

