import { default as React } from 'react';
import { View, Accordion, Panel, Controls, PersonCard, Problem, Button } from 'components';
import { default as tips } from '../../../storage/app/Tips.json';

import { imagePath } from 'filters';
import { findWhere } from 'lodash';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  onQuit(){
    if(confirm('Haluatko varmasti keskeyttää? Tilannettasi ei tallenneta ja siirryt alkunäkymään.')){
      return true;
    }
    else{
      return false;
    }
  },
  onSave(){
    if(confirm('Haluatko varmasti lopettaa? Edistymisesi pelissä tallennetaan ja voit siirtyä alkunäkymään.')){
      return true;
    }
    else{
      return false;
    }
  },
  onSelect(answer) {
    if(!answer.correct) {
      return;
    }
    let {currentCase, currentStep} = this.props;

    this.context.router.transitionTo('step', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep) + 1
    });
  },
  render() {
    var {name, title, description, image} = this.props.currentCase.person;
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

        <Problem
          name={this.props.currentCase.name}
          description={this.props.currentStep.description}
          image={this.props.currentStep.image}
          answers={this.props.currentStep.answers}
          onSelect={this.onSelect} />
      </View>
    );
  }
})
