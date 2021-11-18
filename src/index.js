import './style.css';
import domItems from './dom.js';
import { getScores, postScores } from "./api-Call";

const game_id = 'aJt95NEpxjlxmmqFfIJL';

const refresh = document.getElementById('refresh')
const form = document.getElementById('form');

refresh.addEventListener('click', () => {
  getScores(game_id).then((scores)=>{
    domItems(scores.result)
  });

});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const body = {
    user: document.getElementById('user').value,
    score: parseInt(document.getElementById('score').value,10)
  };

  postScores(game_id, body);
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
 
});

getScores(game_id).then((scores) => {
  domItems(scores.result)
});

// domItems();