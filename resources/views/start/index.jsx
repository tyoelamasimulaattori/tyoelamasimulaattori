var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Navigation = require('react-router').Navigation;

var View = require('components/view');

module.exports = React.createClass({
  mixins: [Navigation],
  render: function() {
    return (
      <View>
        <h1>Valitse lähestymisnäkökulma</h1>
        <RouteHandler/>
      </View>
    );
  },
  componentDidMount: function() {
    this.transitionTo('intro');
  }
})
