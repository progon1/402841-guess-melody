const target = document.querySelector(`.app .main`);

const showScreen = (element) => {
  if (target.firstElementChild) {
    target.replaceChild(element, target.firstElementChild);
  } else {
    target.appendChild(element);
  }
};

export default showScreen;
