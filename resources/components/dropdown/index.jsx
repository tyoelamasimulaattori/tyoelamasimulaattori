import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="dropdown">
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }
});

export const Item = React.createClass({
  render() {
    return (
      <li {...this.props}>
        {this.props.children}
      </li>
    )
  }
});


