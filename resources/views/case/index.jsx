import { default as React } from 'react';
import { default as mockCase } from '../../../storage/app/MockCaseNewVersion.json';
import { default as tips } from '../../../storage/app/Tips.json';

import { default as StepView } from 'views/step';
import { default as EndView } from 'views/end';

import { findWhere } from 'lodash';
import { State } from 'react-router';

export default React.createClass({
  mixins: [State],
  render() {

    const {id, step} = this.getParams();
    const currentCase = mockCase[0];
    const {steps} = currentCase;

    const currentStep = findWhere(steps, {id: parseInt(step)});
    const lastStep = currentStep.end;

    if(lastStep) {
      return (
        <EndView />
      );
    }
    return (
      <StepView currentCase={currentCase} currentStep={currentStep} />
    );
  }
})
