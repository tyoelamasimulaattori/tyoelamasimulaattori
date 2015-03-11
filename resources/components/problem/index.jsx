import { default as React } from 'react';
import { default as Button } from 'components/button';
import { Link } from 'react-router';

export default React.createClass({

  render() {
    var id = function (i, array){
      return parseInt(array[i].next_step_id);
    };

    var style = {
      backgroundImage: 'url(http://lorempizza.com/1280/1280)'
    };

    return (
      <div className="problem" style={style}>
        <div className="problem__description">
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <Button>Vihje</Button>
        </div>

        <div className="problem__questions">
          <Link to="case" params={{id: id(0, this.props.options)}}>
            <div className="question">
              {this.props.options[0].name}
            </div>
          </Link>
          <Link to="case" params={{id: id(1, this.props.options)}}>
            <div className="question">
              {this.props.options[1].name}
            </div>
          </Link>
          <Link to="case" params={{id: id(2, this.props.options)}}>
            <div className="question">
              {this.props.options[2].name}
            </div>
          </Link>
          <Link to="case" params={{id: id(3, this.props.options)}}>
            <div className="question">
              {this.props.options[3].name}
            </div>
          </Link>
        </div>
      </div>
    )
  }
});
