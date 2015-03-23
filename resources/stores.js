import { default as Reflux } from 'reflux';
import { caseActions, perspectiveActions } from 'actions';

let caseData = {
  cases: [],
  currentCase: null
};

export const caseStore = Reflux.createStore({
  init: function() {
    this.listenToMany(caseActions);
  },
  getCases() {
    return caseData.cases;
  },
  getCurrentCase() {
    return caseData.currentCase;
  },
  onGetCasesCompleted(cases) {
    caseData.cases = cases;
    this.trigger();
  },
  onGetCaseCompleted(currentCase) {
    caseData.currentCase = currentCase;
    this.trigger();
  }
});


let perspectiveData = {
  perspectives: []
};

export const perspectiveStore = Reflux.createStore({
  init: function() {
    this.listenToMany(perspectiveActions);
  },
  getPerspectives() {
    return perspectiveData.perspectives;
  },
  onGetPerspectivesCompleted(perspectives) {
    perspectiveData.perspectives = perspectives;
    this.trigger();
  }
});
