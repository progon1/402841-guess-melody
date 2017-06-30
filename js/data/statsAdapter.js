import {DefaultAdapter} from '../model';

export default new class extends DefaultAdapter {
  toServer(data) {
    const time = data.time;
    const answers = data.answers;
    return JSON.stringify({time, answers});
  }
}();
