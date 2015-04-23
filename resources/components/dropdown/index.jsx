import { default as React } from 'react';
import { Link } from 'react-router';

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

    let content;

    if(this.props.to) {
      content = (
        <Link to={this.props.to}>
          {this.props.children}
        </Link>
      )
    } else {
      content = this.props.children;
    }

    return (
      <li {...this.props}>
        {content}
      </li>
    )
  }
});


