import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="sidebar">
        {this.props.children}
      </div>
    );
  }
});
