import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';
import { noop } from 'lodash';

export default React.createClass({
  getDefaultProps() {
    return {
      answers: [],
      onSelect: noop
    };
  },
  onSelect(answer) {
    return () => this.props.onSelect(answer);
  },
  render() {

    var style = {
      backgroundImage: `url(${imagePath(this.props.image)})`
    };

    const answers = this.props.answers.map((option) => {
      return (
        <div className="question" key={option.id} onClick={this.onSelect(option)}>
          {option.text}
        </div>
      )
    });

    return (
      <div className="problem" style={style}>
        <div className="problem__description">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
        </div>

        <div className="problem__questions">
          {answers}
        </div>
      </div>
    )
  }
});
