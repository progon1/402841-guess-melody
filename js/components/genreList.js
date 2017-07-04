import player from './player';

export default (tracks) => {
  const trackList = tracks.answers.map((track, index) => {
    const template = `
      <div class="genre-answer">
        ${player}
        <input type="checkbox" name="answer" value="${track.genre}" id="a-${index}">
        <label class="genre-answer-check" for="a-${index}"></label>
      </div>`;

    return template;
  });

  return trackList.join(``);
};
