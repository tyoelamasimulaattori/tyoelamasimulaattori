import { default as React } from 'react';
import { default as View } from 'components/view';
import { default as Accordion, Panel } from 'components/accordion';
import { default as PersonCard } from 'components/person-card';
import { default as Problem } from 'components/problem';

export default React.createClass({
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
        </div>


        <Problem />

      </View>
    );
  }
})
