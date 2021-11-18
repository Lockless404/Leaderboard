export default class Api {
  static async getData() {
    const pull = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YVT6ZZMxjdxKz7wTavRV/scores/');

    const data = await pull.json();
    const dataOut = await data.result;
    return dataOut;
  }
  
  static async moveToApi(player) {
    const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YVT6ZZMxjdxKz7wTavRV/scores/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(player),
    })
    const data = await res.json();
  }
}