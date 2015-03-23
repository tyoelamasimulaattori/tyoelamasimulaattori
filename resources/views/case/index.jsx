import { default as React } from 'react';
import { default as mockCase } from '../../../storage/app/MockCaseNewVersion.json';
import { default as tips } from '../../../storage/app/Tips.json';

import { default as StepView } from 'views/step';
import { default as EndView } from 'views/end';

import { caseStore } from 'stores';
import { caseActions } from 'actions';

import { findWhere } from 'lodash';
import { State } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      previousSteps: [],
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
  componentWillReceiveProps() {
    const { currentCase, currentStep } = this.getCaseState();

    if(currentStep !== this.state.currentStep) {
      this.setState({
        previousSteps: this.state.previousSteps.concat(currentStep)
      });
    }
  },
  render() {
    const { currentCase, currentStep } = this.getCaseState();

    if(!currentCase) {
      return null;
    }

    if(currentStep.end) {
      return (
        <EndView previousSteps={this.state.previousSteps} currentStep={currentStep}/>
      );
    }
    return (
      <StepView currentCase={currentCase} currentStep={currentStep} />
    );
  },
  statics: {
    willTransitionTo: function (transition, params) {
      return caseActions.getCase(params.id);
    }
  }
})
