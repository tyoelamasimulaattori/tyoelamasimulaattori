import { default as React } from 'react';
import { default as Button } from 'components/button';
import { Link } from 'react-router';
import { imagePath } from 'filters';

export default React.createClass({
  getDefaultProps() {
    return {
      answers: []
    };
  },
  render() {

    var style = {
      backgroundImage: `url(${imagePath(this.props.image)})`
    };

    const answers = this.props.answers.map((option) => {
      return (
        <Link to="step" params={{ id: this.props.id, step: option.next_step_id }}>
          <div className="question">
            {option.text}
          </div>
        </Link>
      )
    });

    return (
      <div className="problem" style={style}>
        <div className="problem__description">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <Button>Vihje</Button>
        </div>

        <div className="problem__questions">
          {answers}
        </div>
      </div>
    )
  }
});
