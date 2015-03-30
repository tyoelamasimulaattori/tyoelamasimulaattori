import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';
import { noop } from 'lodash';

export default React.createClass({
  getDefaultProps() {
    return {
      onNextStep: noop
    }
  },
  render() {
    var style = {
      backgroundImage: `url(${imagePath(this.props.image)})`
    };
    return (
      <div className="feedback" style={style}>
        <div className="feedback__description">
        <p>{ this.props.description }</p>
          <Button onClick={this.props.onNextStep}>Jatka</Button>
        </div>
      </div>
    )
  }
});
