import { default as React } from 'react';
import { default as Button } from 'components/button';
import { default as View } from 'components/view';

export default React.createClass({
  render() {
    const route = this.props.previousSteps.map((step) => {
      return (
        <p>
          {step.description}
        </p>
      )
    });
    return (
      <View id="end-view">
        <h1>Loppunäkymä</h1>
        <div className="row">
          <div className="column column1-5">
            <img src="http://lorempizza.com/i/380/240" alt="end_image" />
          </div>

          <div className="column column4-5">
            <p>
              Teit hyviä valintoja ja sait autettua Matin vaikean elämänvaiheen läpi. Otit huomioon kaiken oleellisen, mutta et unohtanut asemaasi esimiehenä.
              Tulevaisuudessa voit harkita hiema tiukempaa linjaa. Työntekijät ovat toki ystäviäsi, mutta te olette töissä, ette viettämässä vapaa-aikaa.
            </p>
          </div>
        </div>

        <div className="row">
          <h3>Kokeile uutta tapausta eri näkökulmasta tai pohdi miten olisit voinut suoriuua vielä paremmin! </h3>
          <hr/>
          <h2> Valintasi pelin aikana: </h2>
          <h3>{route}</h3>
          <img src="http://lorempizza.com/1500/400" alt="end_tree"/>
        </div>

        <Button to="/">
          Lopeta
        </Button>
      </View>
    );
  }
})
