import { default as React } from 'react';
import { findWhere, extend } from 'lodash';
import { RouteHandler, Navigation } from 'react-router';
import { default as View } from 'components/view';
import { default as Button } from 'components/button';
import { default as PerspectiveSelector } from 'components/perspective-selector';
import { default as CaseSelector } from 'components/case-selector';

import { perspectiveActions } from 'actions';
import { perspectiveStore } from 'stores';

export default React.createClass({
  mixins: [Navigation],
  getInitialState() {
    let state = this.getState();
    return extend(state, {
      selectedPerspective: null
    });
  },
  onDataChange() {
    this.setState(this.getState());
  },
  getState() {
    return {
      perspectives: perspectiveStore.getPerspectives()
    };
  },
  onPerspectiveSelect(selected) {
    this.setState({
      selectedPerspective: selected
    });
  },
  onCaseSelect(selected) {
    this.transitionTo('step', {
      id: 0,
      step: 0
    });
  },
  render() {

    let { selectedPerspective, perspectives } = this.state;
    let caseSelector = null;

    if(selectedPerspective) {
      caseSelector = (
        <div>
          <h2>Valitse tapaus näkökulmasta {selectedPerspective.title} </h2>
          <CaseSelector
          cases={selectedPerspective.cases}
          title={selectedPerspective.title}
          onSelect={this.onCaseSelect} />
        </div>
      )
    }

    return (
      <View id="start-view">
        <h1>Valitse näkökulma</h1>

        <PerspectiveSelector
          perspectives={perspectives}
          onSelect={this.onPerspectiveSelect}
          selected={selectedPerspective} />

        {caseSelector}

        {/* Modals open inside of this RouteHandler */}
        <RouteHandler/>

      </View>
    );
  },
  componentDidMount() {
    this.unsubscribe = perspectiveStore.listen(this.onDataChange);
    // TODO Show intro on the first time user loads the application
    // this.transitionTo('intro');
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  statics: {
    willTransitionTo: function () {
      return perspectiveActions.getPerspectives();
    }
  }
});
