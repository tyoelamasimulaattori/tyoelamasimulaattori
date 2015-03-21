import { default as React } from 'react';
import { default as View } from 'components/view';
import { default as Accordion, Panel } from 'components/accordion';
import { default as PersonCard } from 'components/person-card';
import { default as Problem } from 'components/problem';
import { default as Button } from 'components/button';
import { default as mockCase } from '../../../storage/app/MockCase.json';
import { default as tips } from '../../../storage/app/Tips.json';

import { imagePath } from 'filters';
import { findWhere } from 'lodash';
import { State } from 'react-router';

export default React.createClass({
  mixins: [State],
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

          <Button to="/" onClick={this.onQuit}>
            Lopeta tapaus
          </Button>

          <Button to="/" onClick={this.onSave}>
            Tallenna ja keskeytä
          </Button>
        </div>

        <Problem
          id={this.props.currentCase.id}
          name={this.props.currentCase.name}
          description={this.props.currentStep.description}
          image={this.props.currentStep.image_name}
          options={this.props.currentStep.options} />

      </View>
    );
  }
})
