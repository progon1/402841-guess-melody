const target = document.querySelector(`.app .main`);

const showScreen = (element) => {
  target.replaceChild(element, target.firstElementChild);
};

export default showScreen;
