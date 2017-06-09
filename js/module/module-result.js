import getElementFromTemplate from '../utils/getElementFromTemplate';
import showScreen from './../utils/showScreen';
import logo from '../components/app-logo';
import welcome from './module-welcome';

export default (data) => {
  const comparison = `<span class="main-comparison">${data.comparison}</span>`;

  const screenTemplate = `
    <section class="main main--result">
      ${logo}
      <h2 class="title">${data.title}</h2>
      <div class="main-stat">${data.text}</div>
      ${data.comparison ? comparison : ``}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

  const result = getElementFromTemplate(screenTemplate);

  const playAgain = result.querySelector(`span.main-replay`);
  playAgain.addEventListener(`click`, () => {
    showScreen(welcome());
  });

  return result;
};
