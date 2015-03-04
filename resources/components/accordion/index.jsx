import { default as React } from 'react';
import { extend } from 'lodash';
import { Accordion, Panel } from 'react-bootstrap';

export { Panel as Panel };
export default React.createClass({
  render() {

    var props = extend(this.props, {
      className: 'accordion'
    });

    return (
      <Accordion {...props}>
        {this.props.children}
      </Accordion>
    );
  }
});
