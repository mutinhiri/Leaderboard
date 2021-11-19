import './style.css';
import domItems from './dom.js';
import { getScores, postScores } from './api-Call.js';

const GAME_ID = 'aJt95NEpxjlxmmqFfIJL';

const refresh = document.getElementById('refresh');
const form = document.getElementById('form');

refresh.addEventListener('click', () => {
  getScores(GAME_ID).then((scores) => {
    domItems(scores.result);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    user: document.getElementById('user').value,
    score: parseInt(document.getElementById('score').value, 10),
  };

  postScores(GAME_ID, body);
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
});

getScores(GAME_ID).then((scores) => {
  domItems(scores.result);
});
