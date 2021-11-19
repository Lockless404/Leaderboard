const moveToApi = (player) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ml0wfxegyFf06umHiVlI/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(player),
  }).then((res) => res.json());
};

const getData = async () => {
  const pull = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ml0wfxegyFf06umHiVlI/scores/');

  const data = await pull.json();
  const dataOut = await data.result;
  return dataOut;
};

export {moveToApi, getData};