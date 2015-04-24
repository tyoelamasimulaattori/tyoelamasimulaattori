import { default as React } from 'react';
import { Sidebar, Button, View, UserProfile, CaseList } from 'components';
import { Header } from 'components/view';
import { caseStore } from 'stores';

export default React.createClass({
  render() {
    return (
      <View id="editor-view">
        <Sidebar>
          <CaseList cases={this.state.cases} />
        </Sidebar>
        <Header>Tehtävä-editori</Header>
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
