import { default as React } from 'react';
import { default as Button } from 'components/button';
import { noop } from 'lodash';

export default React.createClass({
  getDefaultProps() {
    return {
      onNextStep: noop
    }
  },
  render() {
    return (
      <div className="feedback">
        <div className="feedback__description">
          <p>heipäöiwuejriw</p>
          <Button onClick={this.props.onNextStep}>Jatka</Button>
        </div>
      </div>
    )
  }
});
