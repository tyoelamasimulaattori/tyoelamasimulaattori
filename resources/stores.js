import { default as Reflux } from 'reflux';
import { caseActions } from 'actions';

let data = {
  cases: [],
  currentCase: null
};

export const caseStore = Reflux.createStore({
  init: function() {
    this.listenToMany(caseActions);
  },
  getCases() {
    return data.cases;
  },
  getCurrentCase() {
    return data.currentCase;
  },
  onGetCasesCompleted(cases) {
    data.cases = cases;
    this.trigger();
  },
  onGetCaseCompleted(currentCase) {
    data.currentCase = currentCase;
    this.trigger();
  }
});
