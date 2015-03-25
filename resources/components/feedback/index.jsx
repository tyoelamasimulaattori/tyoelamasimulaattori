import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';
import { noop } from 'lodash';

export default React.createClass({

  render() {

    return (
      <div className="feedback">
        <div className="feedback__description">
          <p>{this.props.description}</p>
          <Button>Jatka</Button>
        </div>
      </div>
    )
  }
});
