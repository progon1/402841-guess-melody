import {currentState} from './data/game';
//import switchNextScreen from './utils/switchNextScreen';

window.animation = {
  getAnimation: (step, stepDuration, steps) => ({
    step, stepDuration, steps
  }),

  animate: (animation, callback, callbackEnd) => {
    const interval = setInterval(() => {
      window.nextStep = animation.step + 1;
      currentState.nextStep = window.nextStep;
      console.log(currentState.nextStep);
      if (window.nextStep <= animation.steps) {
        animation = window.animation.getAnimation(window.nextStep, animation.stepDuration, animation.steps);
        callback(animation);
      } else {
        stopFn();
        if (typeof callbackEnd === `function`) {
          callbackEnd(animation.stepDuration * animation.steps);
        }
      }
    }, animation.stepDuration);

    const stopFn = () => clearInterval(interval);

    return stopFn;
  }
};
