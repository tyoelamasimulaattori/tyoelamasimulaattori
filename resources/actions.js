import { get } from 'superagent';
import { default as Reflux } from 'reflux';

export let caseActions = Reflux.createActions({
  getCases: {
    asyncResult: true
  },
  getCase: {
    asyncResult: true
  }
});

caseActions.getCases.listen(function() {
  get('/api/cases')
    .on('error', this.failed)
    .end(function(err, response) {
      this.completed(response.body);
    }.bind(this));
});

caseActions.getCase.listen(function(id) {
  get('/api/cases/' + id)
    .on('error', this.failed)
    .end(function(err, response) {
      this.completed(response.body);
    }.bind(this));
});

export let perspectiveActions = Reflux.createActions({
  getPerspectives: {
    asyncResult: true
  }
});

perspectiveActions.getPerspectives.listen(function() {
  get('/api/perspectives')
    .on('error', this.failed)
    .end(function(err, response) {
      this.completed(response.body);
    }.bind(this));
});

export let tipActions = Reflux.createActions({
  getTips: {
    asyncResult: true
  }
});

tipActions.getTips.listen(function() {
  get('/api/tips')
    .on('error', this.failed)
    .end(function(err, response) {
      this.completed(response.body);
    }.bind(this));
});

export let loginActions = Reflux.createActions([
  'login',
  'logout',
  'closeLoginModal',
  'showLoginModal'
]);
