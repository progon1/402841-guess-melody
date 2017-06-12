// Приветствие
import getElementFromTemplate from './../utils/getElementFromTemplate';
import showScreen from './../utils/showScreen';
import artist from './module-artist';
import appLogo from '../components/app-logo';
import songs from '../data/songs';

export default () => {
  const logoTemplate = getElementFromTemplate(appLogo);

  const content = getElementFromTemplate(`
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  `);

  const screenTemplate = getElementFromTemplate(`
    <section class="main main--welcome"></section>
`);

  const screen = screenTemplate.querySelector(`.main--welcome`);
  screen.appendChild(logoTemplate);
  screen.appendChild(content);

  const button = screenTemplate.querySelector(`button.main-play`);
  button.addEventListener(`click`, () => {
    showScreen(artist(songs));
  });
  return screenTemplate;
};
