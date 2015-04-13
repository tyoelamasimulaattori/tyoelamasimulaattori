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
  UserProfile,
  Button
} from 'components';

import { imagePath } from 'filters';
import { tipActions } from 'actions';
import { tipStore } from 'stores';

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
  backToStep() {
    let {currentCase, currentStep} = this.props;
    this.context.router.transitionTo('step', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep)
    });
  },
  toNextStep() {
    let {currentCase, currentStep} = this.props;

    this.context.router.transitionTo('step', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep) + 1
    });
  },
  showFeedback(answer) {
    let {currentCase, currentStep} = this.props;

    this.context.router.transitionTo('feedback', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep),
      option: answer.id
    });
  },
  render() {
    const { name, title, description, image } = this.props.currentCase.person;
    const { currentStep } = this.props;

    var problem, feedback;

    var tips = tipStore.getTips();

    if (this.props.params.option) {
      var answer = findWhere(currentStep.answers, {
        id: parseInt(this.props.params.option)
      });
      feedback = (
        <Feedback
          onNextStep={this.toNextStep}
          onBack={this.backToStep}
          text={answer.feedback}
          correct={answer.correct} />
      );
    } else {
      problem = (
        <Problem
          name={this.props.currentCase.name}
          description={currentStep.description}
          answers={currentStep.answers}
          onSelect={this.showFeedback} />
      );
    }

    var style = {
      backgroundImage: `url(${imagePath(currentStep.image)})`
    };

    return (
      <View id="step-view">
        <div className="sidebar">
          <PersonCard name={name}
                      description={description}
                      image={imagePath(image)}
                      title={title} />

          <h3>Lisämateriaali: </h3>
          <Accordion tips={tipStore.getTips()} />
        </div>

        <div className="step-view__container" style={style}>
          <div className="step-view__header">
            <UserProfile />
          </div>

          <div className="problem">
            {problem}
            {feedback}
            <div className="problem__footer">
              <Controls>

                <Button to="/" onClick={this.onSave}>
                  Tallenna ja keskeytä
                </Button>
                <Button warning to="/" onClick={this.onQuit}>
                  Lopeta tapaus
                </Button>
              </Controls>
            </div>
          </div>
        </div>
      </View>
    );
  }
})
