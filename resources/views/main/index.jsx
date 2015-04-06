import { default as React } from 'react';
import { findWhere, extend } from 'lodash';
import { RouteHandler } from 'react-router';

import {
  View,
  IconButton,
  Button,
  PerspectiveSelector,
  CaseSelector
} from 'components';

import { default as DiscSelectView } from './disc-select';
import { default as IntroView } from './intro';

import { perspectiveActions } from 'actions';
import { perspectiveStore } from 'stores';

export {
  DiscSelectView as DiscSelectView,
  IntroView as IntroView
}

// TODO maybe a better place to store this?
let introShown = false;

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  getInitialState() {
    let state = this.getState();
    return extend(state, {
      selectedPerspective: null
    });
  },
  onDataChange() {
    let newState = this.getState();

    const { perspectives } = newState;

    // Selects a perspective automatically when data is loaded
    if(!this.state.selectedPerspective && perspectives.length > 0) {
      const middleIndex = Math.ceil(perspectives.length/2) - 1;
      newState.selectedPerspective = perspectives[middleIndex];
    }

    this.setState(newState);
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
    if(!selected.disabled){
      this.context.router.transitionTo('step', {
        id: 0,
        step: 0
      });
    }
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
        <IconButton to="intro">
          <i className="fa fa-question"></i>
        </IconButton>

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
    if(!introShown) {
      this.context.router.transitionTo('intro');
      introShown = true;
    }
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
