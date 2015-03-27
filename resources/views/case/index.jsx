import { default as React } from 'react';
import { default as StepView } from 'views/step';
import { default as EndView } from 'views/end';

import { caseStore } from 'stores';
import { caseActions } from 'actions';

import { findWhere } from 'lodash';
import { findLast } from 'lodash';

import { State } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      tips: [],
      currentCase: caseStore.getCurrentCase()
    };
  },
  getCaseState() {
    let currentStep = null;
    const {step} = this.props.params;
    const {currentCase} = this.state;

    if(currentCase) {
      currentStep = findWhere(currentCase.steps, {
        id: parseInt(step)
      });
    }
    return {currentCase, currentStep};
  },
  onDataChange() {
    this.setState({
      currentCase: caseStore.getCurrentCase()
    });
  },
  componentDidMount() {
    const {id} = this.props.params;
    this.unsubscribe = caseStore.listen(this.onDataChange);
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  render() {
    const { currentCase, currentStep } = this.getCaseState();

    if(!currentCase) {
      return null;
    }

    if(currentStep == findLast(currentCase.steps)) {
      return (
        <EndView currentCase={currentCase} />
      );
    }
    return (
      <StepView currentCase={currentCase} currentStep={currentStep} params={this.props.params} />
    );
  },
  statics: {
    willTransitionTo: function (transition, params) {
      return caseActions.getCase(params.id);
    }
  }
})
