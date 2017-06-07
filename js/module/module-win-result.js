// Результат игры
import getElementFromTemplate from '../utils/getElementFromTemplate';
import showScreen from './../utils/showScreen';
import welcome from './module-welcome';


export default () => {
  const logoTemplate = getElementFromTemplate(`
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
`);

  const resultTemplate = getElementFromTemplate(`
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
`);
  const button = getElementFromTemplate(`
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  `);

  const screenTemplate = getElementFromTemplate(`
    <section class="main main--result"></section>
`);

  const screen = screenTemplate.querySelector(`.main`);
  screen.appendChild(logoTemplate);
  screen.appendChild(resultTemplate);
  screen.appendChild(button);

  const playAgain = screenTemplate.querySelector(`span.main-replay`);
  playAgain.addEventListener(`click`, () => {
    showScreen(welcome());
  });

  return screenTemplate;
};
