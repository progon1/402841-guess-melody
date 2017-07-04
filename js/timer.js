import formatTime from './time-format';
import _animation from './animate';

let timer;
let timerMins;
let timerSecs;

// Окружность уменьшается за счет штриховки. Фактически, обводка состоит
// из одного длинного штриха, а пропуск за счет расстояния до следующего
// штриха. Задача правильной заливки состоит в том, чтобы правильно
// задать расстояние до следующего штриха.
//
// Из радиуса можно рассчитать длину окружности. При известной длине окружности,
// количестве шагов и номере текущего шага в анимации можно понять, на сколько
// нужно уменьшать длину окружности на текущем шаге. Для этого надо вычесть
// из нее длину одного шага умноженную на номер текущего шага.
//
// Длина окружности = 2πR
// Длина шага = Длина окружности / Количество шагов
// Пропуск = Длина шага * Номер шага
const redrawCircle = (circle, radius, animation) => {
  const length = 2 * Math.PI * radius;
  const stepLength = length / animation.steps;
  const lengthToClear = stepLength * animation.step;

  circle.setAttributeNS(null, `r`, radius);
  circle.setAttributeNS(null, `stroke-dasharray`, length.toString());
  circle.setAttributeNS(null, `stroke-dashoffset`, lengthToClear.toString());

  return circle;
};


const addLeadingZero = (val) => val < 10 ? `0${val}` : val;


const redrawTimer = (animation) => {
  const total = animation.stepDuration * animation.steps;
  const passed = animation.stepDuration * animation.step;
  const timeLeft = formatTime(total, passed);

  timerMins = timerMins ? timerMins : timer.querySelector(`.timer-value-mins`);
  timerSecs = timerSecs ? timerSecs : timer.querySelector(`.timer-value-secs`);

  timerMins.textContent = addLeadingZero(timeLeft.minutes);
  timerSecs.textContent = addLeadingZero(timeLeft.seconds);

  return timer;
};


const initializeCountdown = (step, stepDuration, steps, callback) => {
  const element = document.querySelector(`.timer-line`);
  const radius = parseInt(element.getAttributeNS(null, `r`), 10);
  timer = document.querySelector(`.timer-value`);

  return _animation.animate(_animation.getAnimation(step, stepDuration, steps), (animation) => {
    redrawCircle(element, radius, animation);
    redrawTimer(animation);
  }, (passedTime) => {
    timer.classList.add(`timer-value--finished`);
    callback(passedTime);
  });
};

export default initializeCountdown;
