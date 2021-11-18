export default class Api {
  static async moveToApi(player) {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ml0wfxegyFf06umHiVlI/scores/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(player),
    }).json();
  }
}