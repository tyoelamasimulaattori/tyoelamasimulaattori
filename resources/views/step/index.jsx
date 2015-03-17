import { default as React } from 'react';
import { default as View } from 'components/view';
import { default as Accordion, Panel } from 'components/accordion';
import { default as PersonCard } from 'components/person-card';
import { default as Problem } from 'components/problem';
import { default as Button } from 'components/button';
import { default as mockCase } from '../../../storage/app/MockCaseNewVersion.json';
import { default as tips } from '../../../storage/app/Tips.json';
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
    return (
      <View id="step-view">
        <div className="sidebar">
          <Accordion tips={tips} /> 
        </div>

        <div className="sidebar sidebar--right">
          <PersonCard />

          <Button to="/" onClick={this.onQuit}>
            Keskeytä case
          </Button>
          <Button to="/" onClick={this.onSave}>
            Tallenna ja lopeta
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
