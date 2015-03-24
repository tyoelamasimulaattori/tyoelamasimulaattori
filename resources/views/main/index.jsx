import { default as React } from 'react';
import { findWhere, extend } from 'lodash';
import { RouteHandler, Navigation } from 'react-router';
import { View, Button, PerspectiveSelector, CaseSelector } from 'components';

import { default as DiscSelectView } from './disc-select';
import { default as IntroView } from './intro';

import { perspectiveActions } from 'actions';
import { perspectiveStore } from 'stores';

export {
  DiscSelectView as DiscSelectView,
  IntroView as IntroView
}

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
          <h2>
            Valitse tapaus näkökulmasta <strong>{selectedPerspective.title}</strong>
          </h2>
          <CaseSelector
          cases={selectedPerspective.cases}
          onSelect={this.onCaseSelect} />
        </div>
      )
    }

    return (
      <View id="start-view">
        <h1 className="view__header">Valitse näkökulma</h1>

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
