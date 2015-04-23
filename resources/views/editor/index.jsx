import { default as React } from 'react';
import { Sidebar, Button, View, UserProfile, CaseList } from 'components';
import { caseStore } from 'stores';

export default React.createClass({
  render() {
    return (
      <View id="editor-view">
        <Sidebar>
          <CaseList cases={this.state.cases} />
        </Sidebar>
        <h1 className="view__header">Tehtävä-editori</h1>
      </View>
    );
  },
  getInitialState() {
    return this.getState();
  },
  getState() {
    return {
      cases: caseStore.getCases()
    }
  },
  onDataChange() {
    this.setState(this.getState);
  },
  componentDidMount() {
    this.unsubscribe = caseStore.listen(this.onDataChange);
  },
  componentWillUnmount() {
    this.unsubscribe();
  }

})
