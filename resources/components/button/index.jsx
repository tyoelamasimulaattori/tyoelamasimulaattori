var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (<button className="btn">{this.props.children}</button>);
  }
})
