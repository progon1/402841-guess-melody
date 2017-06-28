import timerLayout from './components/timer';

export const createElement = (template) => {
  const container = document.createElement(`template`);
  container.innerHTML = template;

  return container.content;
};

const main = document.querySelector(`.app .main`);

export const changeView = (view) => {
  main.innerHTML = ``;
  main.appendChild(view.element);
};

export const enableTimerLayout = (enable) => {
  const timer = document.querySelector(`.timer`);
  if (!timer) {
    return;
  }

  if (enable) {
    timer.appendChild(createElement(timerLayout));
  } else {
    timer.innerHTML = ``;
  }
};
