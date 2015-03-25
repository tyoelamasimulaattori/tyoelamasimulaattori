import { default as React } from 'react';
import { findWhere } from 'lodash';

import {
  View,
  Accordion,
  Panel,
  Controls,
  PersonCard,
  Problem,
  Feedback,
  Button
} from 'components';

import { imagePath } from 'filters';
import { default as tips } from '../../../storage/app/Tips.json';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  onQuit() {
    return confirm('Haluatko varmasti keskeyttää? Tilannettasi ei tallenneta ja siirryt alkunäkymään.');
  },
  onSave() {
    return confirm('Haluatko varmasti lopettaa? Edistymisesi pelissä tallennetaan ja voit siirtyä alkunäkymään.');
  },
  onNextStep() {
    let {currentCase, currentStep} = this.props;

    this.context.router.transitionTo('step', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep) + 1
    });
  },
  onSelect(answer) {
    if(!answer.correct) {
      return;
    }
    this.onNextStep();
  },
  render() {
    const {name, title, description, image} = this.props.currentCase.person;
    const { currentStep } = this.props;

    var problem, feedback;

    if (currentStep.feedback) {
      feedback = (
        <Feedback
          description={currentStep.description}
          onNextStep={this.onNextStep} />
      );
    } else {
      problem = (
        <Problem
          name={this.props.currentCase.name}
          description={currentStep.description}
          image={currentStep.image}
          answers={currentStep.answers}
          onSelect={this.onSelect} />
      );
    }

    return (
      <View id="step-view">
        <div className="sidebar">
          <Accordion tips={tips} />
        </div>

        <div className="sidebar sidebar--right">
          <PersonCard name={name}
                      description={description}
                      image={imagePath(image)}
                      title={title} />
          <Controls>
            <Button warning to="/" onClick={this.onQuit}>
              Lopeta tapaus
            </Button>

            <Button to="/" onClick={this.onSave}>
              Tallenna ja keskeytä
            </Button>
          </Controls>
        </div>

        {problem}
        {feedback}

      </View>
    );
  }
})
