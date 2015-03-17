import { default as React } from 'react';
import { default as mockCase } from '../../../storage/app/MockCaseNewVersion.json';
import { default as tips } from '../../../storage/app/Tips.json';

import { default as StepView } from 'views/step';
import { default as EndView } from 'views/end';

import { findWhere } from 'lodash';
import { State } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      previousSteps: []
    };
  },
  getCaseState() {
    const currentCase = mockCase[0];
    const {step} = this.props.params;
    const currentStep = findWhere(currentCase.steps, {
      id: parseInt(step)
    });
    return {currentCase, currentStep};
  },
  componentDidMount() {
    const { currentStep } = this.getCaseState();

    this.setState({
      previousSteps: [currentStep]
    });
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

    if(currentStep.end) {
      return (
        <EndView previousSteps={this.state.previousSteps} currentStep={currentStep}/>
      );
    }
    return (
      <StepView currentCase={currentCase} currentStep={currentStep} />
    );
  }
})
