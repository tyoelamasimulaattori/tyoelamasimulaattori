import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="view">
        {this.props.children}
      </div>
    );
  }
})
