const template = document.querySelector(`#templates`);
const screens = template.content.querySelectorAll(`section.main`);
const target = document.querySelector(`.app .main`);
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const order = [4, 0, 3, 2, 1];


const showScreen = (num) => {
  if (target.children.length) {
    target.replaceChild(screens[order[num]], target.firstElementChild);
  } else {
    target.appendChild(screens[order[num]]);
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
