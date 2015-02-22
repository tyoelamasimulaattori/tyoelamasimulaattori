import { default as React } from 'react';
import { RouteHandler, Navigation } from 'react-router';
import { default as View } from 'components/view';

export default React.createClass({
  mixins: [Navigation],
  render() {
    return (
      <View>
        <h1>Valitse kyvykkyystekijä</h1>
        <RouteHandler/>
      </View>
    );
  },
  componentDidMount() {
    this.transitionTo('intro');
  }
})
