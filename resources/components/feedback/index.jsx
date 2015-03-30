import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';
import { noop } from 'lodash';

export default React.createClass({
  getDefaultProps() {
    return {
      onNextStep: noop,
      onBack: noop,
      correct: false,
      text: ''
    }
  },
  render() {
    var style = {
      backgroundImage: `url(${imagePath(this.props.image)})`
    };

    var button;
    if(this.props.correct) {
      button = <Button onClick={this.props.onNextStep}>Jatka</Button>;
    } else {
      button = <Button onClick={this.props.onBack}>Takaisin</Button>;
    }

    return (
      <div className="feedback" style={style}>
        <div className="feedback__description">
          <p>{this.props.text}</p>
          {button}
        </div>
      </div>
    )
  }
});
