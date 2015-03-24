import { default as React } from 'react';
import { default as _ } from 'lodash';

export default React.createClass({
  render() {

    var props = _.extend({}, this.props, {
      className: 'view'
    });

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
})
