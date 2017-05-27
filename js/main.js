const template = document.querySelector(`#templates`);
const screens = template.content.querySelectorAll(`section.main`);
const target = document.querySelector(`.app .main`);

const showScreen = (num) => {
  if (target.children.length) {
    target.replaceChild(screens[num], target.firstElementChild);
  } else {
    target.appendChild(screens[num]);
  }

};

let currentScreenIdx = Array.prototype.findIndex.call(screens, (screen) => {
  return screen.classList.contains(`main--welcome`);
});

showScreen(currentScreenIdx);

document.addEventListener(`keydown`, (evt) => {
  if (evt.altKey && evt.keyCode === 39) {
    if (currentScreenIdx === screens.length - 1) {
      currentScreenIdx = -1;
    }

    showScreen(++currentScreenIdx);
  }

  if (evt.altKey && evt.keyCode === 37) {
    evt.preventDefault();
    if (currentScreenIdx === 0) {
      currentScreenIdx = screens.length;
    }

    showScreen(--currentScreenIdx);
  }
});

