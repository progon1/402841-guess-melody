// Неудачный результат игры
import getElementFromTemplate from '../utils/getElementFromTemplate';
import showScreen from './../utils/showScreen';
import welcome from './module-welcome';

export default () => {
  const lossResult = getElementFromTemplate(`
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

  const playAgain = lossResult.querySelector(`span.main-replay`);
  playAgain.addEventListener(`click`, () => {
    showScreen(welcome());
  });

  return lossResult;
};
