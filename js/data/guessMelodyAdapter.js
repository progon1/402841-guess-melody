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
        tmp.push(fetch(url));
      });

      Promise.all(tmp)
        .then(() => resolve(preprocessed))
        .catch(() => resolve(preprocessed));
    });
  }
}();

