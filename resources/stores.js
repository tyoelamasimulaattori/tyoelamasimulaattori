import { default as Reflux } from 'reflux';

import {
  caseActions,
  perspectiveActions,
  tipActions,
  loginActions
} from 'actions';

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

let tipData = {
  tips: []
};

export const tipStore = Reflux.createStore({
  init: function() {
    this.listenToMany(tipActions);
  },
  getTips() {
    return tipData.tips;
  },
  onGetTipsCompleted(tips) {
    tipData.tips = tips;
    this.trigger();
  }
});

let loginData = {
  loggedIn: false,
  loginModalOpen: false
};

export const loginStore = Reflux.createStore({
  init: function() {
    this.listenToMany(loginActions);
  },
  isLoggedIn() {
    return loginData.loggedIn;
  },
  isLoginModalOpen() {
    return loginData.loginModalOpen;
  },
  onCloseLoginModal() {
    loginData.loginModalOpen = false;
    this.trigger();
  },
  onShowLoginModal() {
    loginData.loginModalOpen = true;
    this.trigger();
  },
  onLogin() {
    loginData.loggedIn = true;
    loginData.loginModalOpen = false;
    this.trigger();
  }
});
