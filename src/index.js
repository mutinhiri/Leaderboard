import './style.css';
import domElement from './dom';

const dom = document.querySelector('.data');

 const domItems = ()=>{
   domElement.forEach((e)=>{
     const li = document.createElement('li')
     li.innerHTML = `${e.name}:${e.score}`;
     dom.appendChild(li)

   });
 };

domItems()