import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="form">
        {this.props.children}
      </div>
    )
  }
});
