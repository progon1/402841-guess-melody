export default (songs) => {

  const artistList = songs.map((song) => {
    return `
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${song.id}" name="answer" value="${song.artist}" />
          <label class="main-answer" for="answer-${song.id}">
            <img class="main-answer-preview" src="${song.image}">
            ${song.artistName}
          </label>
        </div>
      `;
  });

  return artistList.join(``);
};
