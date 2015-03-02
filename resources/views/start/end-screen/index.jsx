import { default as React } from 'react';
import { default as Button } from 'components/button';

export default React.createClass({
  render() {
    return (
      <div className="End">
        <h1>Loppunäkymä</h1>
        <div id="end_text" className = "end_text">
          <h2> Tämä on kuva </h2>
            <p> Bacon ipsum dolor amet filet mignon sausage fatback shoulder frankfurter pork loin ribeye. Tenderloin prosciutto ribeye alcatra turducken pancetta leberkas. Picanha alcatra kevin beef pancetta swine frankfurter pastrami shankle ham hock doner.
            Prosciutto pancetta capicola corned beef bresaola porchetta rump meatball spare ribs jowl ham short ribs sausage swine biltong.
            </p>
            <Button to="/">
              Lopeta
            </Button>
        </div>
      </div>
    );
  }
  })
