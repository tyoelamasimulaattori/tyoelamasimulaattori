import { default as React } from 'react';
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
    const tips = this.props.tips.map((tip, i) => {

      const header = (
        <span>
          <i className={`fa fa-${icons[i % icons.length]}`} />
          {tip.name}
        </span>
      );

      let content = [tip.text];

      if(tip.image == null && tip.link) {
        content.push(
          <img
            src={imagePath(tip.link)}
            onClick={this.props.popup.bind(null, tip.link)} />
        );
      }

      if(tip.image && tip.link == null) {
        content.push(
          <img
            src={imagePath(tip.image)}
            onClick={this.props.onClick} />
        );
      }

      return (
        <Panel
          header={header}
          eventKey={tip.id}
          key={tip.id}>
          {content}
        </Panel>
      );
    });
    return (
      <div className="accordion">
        <Accordion>{tips}</Accordion>
      </div>
    );
  }
});
