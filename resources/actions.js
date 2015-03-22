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
