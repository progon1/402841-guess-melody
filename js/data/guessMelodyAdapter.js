import {DefaultAdapter} from '../model';

export default new class extends DefaultAdapter {
  preprocess(data) {
    const preprocessed = {};
    Object.keys(data).forEach((it, i) => {
      preprocessed[`question-${i + 1}`] = data[i];
    });

    return preprocessed;
  }
}();

