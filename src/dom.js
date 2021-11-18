const dom = document.querySelector('.data');

const domItems = (list) => {
  dom.innerHTML = '';
  list.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `${e.user}:${e.score}`;
    dom.appendChild(li);
  });
};

export default domItems;