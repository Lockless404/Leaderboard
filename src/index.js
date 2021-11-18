import './style.css';
import NewPlayer from './newplaya';
import Api from './api';

class Ui {
  static render() {
    const listItems = document.querySelector('.list');
    const players = Api.getData();
    console.log(players[0]);
    players.forEach((player) => {
      listItems.innerHTML = `
      <li>
        <p>${player.user}</p>
        <p>${player.score}</p>
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
}

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
  const score = document.querySelector('.inputScore').value;
  const name = document.querySelector('.inputName').value;
  const player = new NewPlayer(name, Number(score));
  Api.moveToApi(player);
});

const refreshBtn = document.querySelector('.refreshBtn');
refreshBtn.addEventListener('click', () => {
  Ui.render();
});

