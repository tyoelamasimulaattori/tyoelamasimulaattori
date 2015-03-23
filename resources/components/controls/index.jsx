import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="controls">
        {this.props.children}
      </div>
    )
  }
});
