export const initialState = {
  question: `question-1`,
  lives: 3,
  time: 120,
  dimension: 1000
};

export const currentState = {
  passedTime: 0,
  step: 0,

  get nextStep() {
    return this.step;
  },
  set nextStep(next) {
    this.step = next;
  }
};
