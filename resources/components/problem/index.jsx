import { default as React } from 'react';
import { default as Button } from 'components/button';
import { Link } from 'react-router';

export default React.createClass({
  getDefaultProps() {
    return {
      options: []
    }
  },
  render() {
    const style = {
      backgroundImage: 'url(http://lorempizza.com/1280/1280)'
    };

    const options = this.props.options.map((option) => {
      return (
        <Link to="step" params={{ id: this.props.id, step: option.next_step_id }}>
          <div className="question">
            {option.name}
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
          {options}
        </div>
      </div>
    )
  }
});
