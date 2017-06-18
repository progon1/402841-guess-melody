import getElementFromTemplate from '../utils/getElementFromTemplate';
import showScreen from './../utils/showScreen';
import logo from '../components/app-logo';
import welcome from './module-welcome';
import stat from './../utils/evalStatistics';

export default (data) => {

  const screenTemplate = `
    <section class="main main--result">
      ${logo}
      <h2 class="title">${data.title}</h2>
      <div class="main-stat">${data.text}</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${stat()}%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

  const result = getElementFromTemplate(screenTemplate);

  const playAgain = result.querySelector(`span.main-replay`);
  playAgain.addEventListener(`click`, () => {
    showScreen(welcome());
  });

  return result;
};
