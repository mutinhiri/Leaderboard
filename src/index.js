import './style.css';
import domElement from './dom.js';

const dom = document.querySelector('.data');

const domItems = (list) => {
  dom.innerHTML = ''
  list.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `${e.name}:${e.score}`;
    dom.appendChild(li);
  });
};

domItems();