import { default as React } from 'react';
import { default as View } from 'components/view';
import { default as Accordion, Panel } from 'components/accordion';
import { default as PersonCard } from 'components/person-card';
import { default as Problem } from 'components/problem';
import { default as Button } from 'components/button';

export default React.createClass({
  onQuit(){
    if(confirm("Haluatko varmasti keskeyttää? Tilannettasi ei tallenneta ja siirryt alkunäkymään.")){
      console.log("true");
      return true;
    }
    else{
      console.log("false");
      return false;
    }
  },
  onSave(){
    if(confirm("Haluatko varmasti lopettaa? Edistymisesi pelissä tallennetaan ja voit siirtyä alkunäkymään.")){
      console.log("true");
      return true;
    }
    else{
      console.log("false");
      return false;
    }
  },
  render() {
    return (
      <View id="case-view">
        <div className="sidebar">
          <Accordion>
            <Panel header='Lorem ipsum dolor sit amet' eventKey='1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero ante, congue sagittis mi a, ullamcorper hendrerit ligula. Nunc hendrerit neque ut felis laoreet feugiat.
            </Panel>
            <Panel header='Lorem ipsum dolor sit amet' eventKey='2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero ante, congue sagittis mi a, ullamcorper hendrerit ligula. Nunc hendrerit neque ut felis laoreet feugiat.
            </Panel>
            <Panel header='Lorem ipsum dolor sit amet' eventKey='3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero ante, congue sagittis mi a, ullamcorper hendrerit ligula. Nunc hendrerit neque ut felis laoreet feugiat.
            </Panel>
            <Panel header='Lorem ipsum dolor sit amet' eventKey='4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero ante, congue sagittis mi a, ullamcorper hendrerit ligula. Nunc hendrerit neque ut felis laoreet feugiat.
            </Panel>
            <Panel header='Lorem ipsum dolor sit amet' eventKey='5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero ante, congue sagittis mi a, ullamcorper hendrerit ligula. Nunc hendrerit neque ut felis laoreet feugiat.
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
          <Button to="/end" onClick={this.onQuit}>
            Loppuun
          </Button>
        </div>


        <Problem />

      </View>
    );
  }
})
