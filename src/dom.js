// const domElement = [{ name: 'Barna', score: 20 }, { name: 'Svabi', score: 50 }, { name: 'Joel', score: 30 }];

import { getScores, postScores } from "./api-Call";

// export default domElement;

const game_id = 'aJt95NEpxjlxmmqFfIJL';

const refresh = document.getElementById('refresh')
const form = document.getElementById('form');

refresh.addEventListener('submit', (e) =>{
  e.preventDefault();
  const body = {
    user: document.getElementById('user'),
    score: parseInt(document.getElementById('score').value,10)
  };
  postScores(game_id, body);
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
});

getScores(game_id).then((scores.result))