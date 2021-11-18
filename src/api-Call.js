
const getScores = async (id) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`
  const response = await fetch(url, {method:'GET'});
  const scores = await response.json();
  return scores;
};

const postScores = async (id, data) =>{
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`
  await fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  });
};

export {getScores, postScores}