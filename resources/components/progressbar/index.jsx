import { default as React } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default React.createClass({
  render() {
    const fraction = 100/(this.props.steps.length-1);
    var currPros= this.props.step * fraction;
    return (
      <div className="progressbar">
        <ProgressBar  label='%(percent)s%' bsStyle='info' now={currPros}/>
      </div>
    );
  }
});
