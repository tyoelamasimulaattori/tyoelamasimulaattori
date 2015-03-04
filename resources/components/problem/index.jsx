import { default as React } from 'react';
import { default as Button } from 'components/button';

export default React.createClass({
  render() {

    var style = {
      backgroundImage: 'url(http://lorempizza.com/1280/1280)'
    };

    return (
      <div className="problem" style={style}>
        <div className="problem__description">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
            consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <Button>Vihje</Button>
        </div>
        <div className="problem__questions">
          <div className="question">
            a. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className="question">
            b. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
          <div className="question">
            c. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </div>
        </div>
      </div>
    )
  }
});
