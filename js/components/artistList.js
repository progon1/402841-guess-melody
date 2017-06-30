export default (songs) => {

  const artistList = songs.answers.map((song, id) => {
    return `
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${id}" name="answer" ${song.isCorrect ? `data-isCorrect` : ``} />
          <label class="main-answer" for="answer-${id}">
            <img class="main-answer-preview" src="${song.image.url}">
            ${song.title}
          </label>
        </div>
      `;
  });

  return artistList.join(``);
};
