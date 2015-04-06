import { default as React } from 'react';
import { default as Button } from 'components/button';

export default React.createClass({
  render() {
    return (
      <Button className="btn--icon" {...this.props}>
        {this.props.children}
      </Button>
    )
  }
});
