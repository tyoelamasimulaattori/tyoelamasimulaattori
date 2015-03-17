import { default as React } from 'react';
import { extend } from 'lodash';
import { Accordion, Panel } from 'react-bootstrap';

export { Panel as Panel };
export default React.createClass({
  render() {

    var props = extend(this.props, {
      className: 'accordion'
    });
	const tips = this.props.tips.map((tip) => { 
       return (
         <Panel header={tip.id} eventKey ={tip.id}>{tip.text}</Panel>
       )
    });
    return (
      <Accordion>{tips}</Accordion>
    );
  }
});