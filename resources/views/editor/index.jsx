import React from 'react';
import { RouteHandler } from 'react-router';
import { chain, findWhere } from 'lodash';
import { Sidebar, IconButton, View, UserProfile, CaseList } from 'components';
import { caseStore, perspectiveStore } from 'stores';

import { default as EditorEditView} from './edit';
import { default as EditorMainView} from './main';

import { Container } from 'components/view';

export {
  EditorMainView as EditorMainView,
  EditorEditView as EditorEditView
}

export default React.createClass({
  toPerspectiveName(id) {
    const perspective = findWhere(this.state.perspectives, {id:id});
    if(!perspective) return id;
    return perspective.title;
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  onCaseSelected(selectedCase) {
    this.context.router.transitionTo('edit', {
      id: selectedCase.id
    })
  },
  render() {
    const caseLists = chain(this.state.cases)
      .groupBy('perspective_id').toArray().map((caseGroup) => {
        const id = caseGroup[0].perspective_id;
        return (
          <CaseList
            key={id}
            title={this.toPerspectiveName(id)}
            className={`perspective--${id}`}
            cases={caseGroup}
            onSelect={this.onCaseSelected} />
        )
      }).value();

    return (
      <View id="editor-view">
        <Sidebar>
          <IconButton to="new">
            <i className="fa fa-plus"></i> Luo uusi
          </IconButton>
            {caseLists}
        </Sidebar>
        <Container>
          <RouteHandler {...this.props} />
        </Container>
      </View>
    );
  },
  getInitialState() {
    return this.getState();
  },
  getState() {
    return {
      cases: caseStore.getCases(),
      perspectives: perspectiveStore.getPerspectives()
    }
  },
  onDataChange() {
    this.setState(this.getState);
  },
  componentDidMount() {
    this.unsubscribes = [
      caseStore.listen(this.onDataChange),
      perspectiveStore.listen(this.onDataChange)
    ]
  },
  componentWillUnmount() {
    this.unsubscribes.forEach((f) => f());
  }

})
