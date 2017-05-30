const template = document.querySelector(`#templates`);
let screens = template.content.querySelectorAll(`section.main`);
const target = document.querySelector(`.app .main`);
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const mainOrder = [`main--welcome`, `main--level-genre`, `main--level-artist`, `main--result`, `main--result`];


const sortScreens = function (order, ...pScreens) {
  const arr = [];

  for (let i = 0; i < order.length; i++) {
    const idx = pScreens.findIndex((item) => {
      return item.classList.contains(order[i]);
    });
    const element = pScreens.splice(idx, 1);
    arr.push(...element);
  }

  if (arr[3].children.length < arr[4].children.length) {
    const [,,, third, fourth] = arr;
    arr.splice(3, 2, fourth, third);
  }

  pScreens.push(...arr);
  return pScreens;
};
screens = sortScreens(mainOrder, ...screens);

const showScreen = (num) => {
  if (target.children.length) {
    target.replaceChild(screens[num], target.firstElementChild);
  } else {
    target.appendChild(screens[num]);
  }
};

let currentScreenIdx = 0;

showScreen(currentScreenIdx);

document.addEventListener(`keydown`, (evt) => {
  if (evt.altKey && evt.keyCode === RIGHT_ARROW) {
    if (currentScreenIdx === screens.length - 1) {
      currentScreenIdx = -1;
    }

    showScreen(++currentScreenIdx);
  }

  if (evt.altKey && evt.keyCode === LEFT_ARROW) {
    evt.preventDefault();
    if (currentScreenIdx === 0) {
      currentScreenIdx = screens.length;
    }

    showScreen(--currentScreenIdx);
  }
});
