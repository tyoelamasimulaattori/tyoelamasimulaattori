import { default as React } from 'react';
import { sample } from 'lodash';
import { imagePath } from 'filters';
import { Accordion, Panel } from 'react-bootstrap';

export { Panel as Panel };

/*
 * TODO
 * - <Panel />:it syötetään sieltä missä tätä käytetään
 */

export default React.createClass({
  render() {

    var icons = [
      'bomb',
      'building',
      'bug',
      'cubes',
      'diamond',
      'eye',
      'heartbeat',
      'coffee',
      'plane',
      'send',
      'support',
      'trophy',
      'wheelchair'
    ]
    const tips = this.props.tips.map((tip) => {
      const header = (
        <span>
          <i className={`fa fa-${sample(icons)}`} />
          {tip.name}
        </span>
      );
      var panel;

      if(tip.image == null){
        panel = (
          <Panel
            header={header}
            eventKey={tip.id}
            key={tip.id}>
            {tip.text}
          </Panel>
        );
      }
      else{
        panel =(
          <Panel
            header={header}
            eventKey={tip.id}
            key={tip.id}>
            {tip.text}
            <img src={imagePath(tip.image)} onClick={this.props.onClick} />
          </Panel>
         );
      }
      return (panel)
    });
    return (
      <div className="accordion">
        <Accordion>{tips}</Accordion>
      </div>
    );
  }
});
