import React from 'react';
import { RouteHandler } from 'react-router';
import { chain, findWhere } from 'lodash';
import { Sidebar, IconButton, View, UserProfile, CaseList } from 'components';
import { caseStore, perspectiveStore } from 'stores';

import { default as EditorNewView} from './new';
import { default as EditorMainView} from './main';

export {
  EditorMainView as EditorMainView,
  EditorNewView as EditorNewView
}

export default React.createClass({
  toPerspectiveName(id) {
    const perspective = findWhere(this.state.perspectives, {id:id});
    if(!perspective) return id;
    return perspective.title;
  },
  render() {
    const caseLists = chain(this.state.cases)
      .groupBy('perspective_id').toArray().map((caseGroup) => {
        return (
          <CaseList
            title={this.toPerspectiveName(caseGroup[0].perspective_id)}
            className={`perspective--${caseGroup[0].perspective_id}`}
            cases={caseGroup} />
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
        <RouteHandler />
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
