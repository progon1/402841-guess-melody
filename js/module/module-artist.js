// Выбор исполнителя: уровень
import getElementFromTemplate from '../utils/getElementFromTemplate';
// import showScreen from './../utils/showScreen';
// import genreScreen from './module-genre';
// import resultScreen from './module-result';
import artistList from '../components/artist-list';
import timer from '../components/timer';
import game from '../data/game';
// import lossResult from '../data/result/loss';
import player from '../components/player';
// import genre from '../data/genre';
import questionList from '../data/questions-list';
import switchNextScreen from '../utils/switchNextScreen';
import switchQuestion from '../utils/switchQuestion';
import reduceLives from '../utils/reduceLives';
import isQuestionOver from './../utils/isQuestionOver';

export default (data) => {
  const artistTemplate = `
<section class="main main--level main--level-artist">
    ${timer(game.time)}

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      ${player}
      <form class="main-list">
        ${artistList(data.songs)}
      </form>
    </div>
  </section>
`;

  const artist = getElementFromTemplate(artistTemplate);

  const container = artist.querySelector(`.main-list`);
  container.addEventListener(`click`, (evt) => {

    if (evt.target.classList.contains(`main-answer-r`)) {
      if (data.trackArtist.toLowerCase() === evt.target.getAttribute(`value`)) {

        const currentQuestion = window.sessionStorage.getItem(`currentQuestion`);
        const nextQuestion = switchQuestion(currentQuestion);
        window.sessionStorage.setItem(`currentQuestion`, nextQuestion);
        const result = isQuestionOver(currentQuestion) ?
          `win` : questionList[nextQuestion].type;

        switchNextScreen(result);
      } else {
        const currentLives = reduceLives(window.sessionStorage.getItem(`numberOfLive`));

        if (currentLives) {
          window.sessionStorage.setItem(`numberOfLive`, currentLives);

          const nextQuestion = switchQuestion(window.sessionStorage.getItem(`currentQuestion`));
          window.sessionStorage.setItem(`currentQuestion`, nextQuestion);
          switchNextScreen(questionList[nextQuestion].type);
        } else {
          switchNextScreen(`loss`);
        }
      }
    }
  });

  const playerWrapper = artist.querySelector(`.player-wrapper`);
  window.initializePlayer(playerWrapper, `tracks/${data.trackName}`, true);

  return artist;
};
