import {DefaultAdapter} from '../model';

const makePlainArray = (question) => {
  const urlArr = [];
  if (question.src) {
    urlArr.push(question.src);
  } else {
    question.answers.forEach((it) => {
      if (it.src) {
        urlArr.push(it.src);
      }
    });
  }
  return urlArr;
};

const preloadAudio = (res, rej, url) => {
  const audio = document.createElement(`audio`);
  audio.src = url;
  audio.onloadeddata = () => res(1);
  audio.onerror = () => rej(2);
};

export default new class extends DefaultAdapter {
  preprocess(data) {
    return new Promise((resolve) => {
      const preprocessed = {};
      const arr = [];
      Object.keys(data).forEach((it, i) => {
        preprocessed[`question-${i + 1}`] = data[i];
        arr.push(...makePlainArray(data[i]));
      });

      const tmp = [];
      arr.forEach((url) => {
        tmp.push(new Promise((res, rej) => {
          preloadAudio(res, rej, url);
          /* const audio = document.createElement(`audio`);
          audio.src = url;
          audio.onloadeddata = () => res(1);
          audio.onerror = () => rej(2);*/
        }).then((a) => {
          window.console.log(a);
          return a;
        }, (a) => {
          window.console.log(a);
          return a;
        }));
        // tmp.push(fetch(url)); // или вместо Promise 34 строка
      });
      window.console.log(arr);
      Promise.all(tmp)
        .then(() => resolve(preprocessed))
        .catch(() => resolve(preprocessed));
    });
  }
}();

