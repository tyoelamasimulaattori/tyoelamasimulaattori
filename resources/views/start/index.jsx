import { default as React } from 'react';
import { RouteHandler, Navigation } from 'react-router';
import { default as View } from 'components/view';
import { default as Button } from 'components/button';

export default React.createClass({
  mixins: [Navigation],
  render() {
    return (
      <View>
        <h1>Valitse kyvykkyystekijä</h1>
        <p>
          Bacon ipsum dolor amet filet mignon sausage fatback shoulder frankfurter pork loin ribeye. Tenderloin prosciutto ribeye alcatra turducken pancetta leberkas.
          Picanha alcatra kevin beef pancetta swine frankfurter pastrami shankle ham hock doner.
          Prosciutto pancetta capicola corned beef bresaola porchetta rump meatball spare ribs jowl ham short ribs sausage swine biltong.
        </p>
        <Button to="end">Loppuun</Button>

        {/* Modals open inside of this RouteHandler */}
        <RouteHandler/>

      </View>
    );
  },
  componentDidMount() {
    this.transitionTo('intro');
  }
})
