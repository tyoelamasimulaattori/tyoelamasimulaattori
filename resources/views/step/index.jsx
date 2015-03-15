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
          <Accordion>
            <Panel header="Herzbergin vihjeet" eventKey="1">
              Attitudes and their connection with industrial mental health are related to Abraham Maslows theory of motivation. His findings have had a considerable theoretical, as well as a practical, influence on attitudes toward administration.
            </Panel>
            <Panel header="GROW" eventKey="2">
              <p>
                G   Goal  The Goal is the end point, where the client wants to be. The goal has to be defined in such a way that it is very clear to the client when they have achieved it.
              </p>
              <p>
                R   Reality   The Current Reality is where the client is now. What are the issues, the challenges, how far are they away from their goal?
              </p>
              <p>
                O   Obstacles   There will be Obstacles stopping the client getting from where they are now to where they want to go. If there were no Obstacles the client would already have reached their goal.
                    Options   Once Obstacles have been identified, the client needs to find ways of dealing with them if they are to make progress. These are the Options.
              </p>
              W   Way Forward   The Options then need to be converted into action steps which will take the client to their goal. These are the Way Forward.
            </Panel>
            <Panel header="Vihjeet" eventKey="3">
              Harkitse tarkkaan mikä vastaus rauhoittaisi mattia. Katso lisätietoa: Matin Ongelmat (s. 10- 12).
            </Panel>
            <Panel header="Neuvot" eventKey="4">
              Älä ole ikävä.
            </Panel>
            <Panel header="????" eventKey="5">
              Tips
            </Panel>
          </Accordion>
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
          options={this.props.currentStep.options} />

      </View>
    );
  }
})
