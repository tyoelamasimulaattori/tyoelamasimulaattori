import { default as React } from 'react';
import { extend, sample } from 'lodash';
import { Accordion, Panel } from 'react-bootstrap';

export { Panel as Panel };
export default React.createClass({
  render() {

    var props = extend({}, this.props, {
      className: 'accordion'
    });

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

      return (
        <Panel
          header={header}
          eventKey={tip.id}
          key={tip.id}>
          {tip.text}
         </Panel>
       )
    });
    return (
      <div className="accordion">
        <Accordion>{tips}</Accordion>
      </div>
    );
  }
});
