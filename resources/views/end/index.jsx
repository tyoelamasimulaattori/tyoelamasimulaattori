import { default as React } from 'react';
import { default as Button } from 'components/button';
import { default as View } from 'components/view';

export default React.createClass({
  render() {
    return (
      <View id="end-view">
        <h1>Loppunäkymä</h1>
        <div className="row">
          <div className="column column1-5">
            <img src="http://lorempizza.com/i/380/240" alt="end_image" />
          </div>

          <div className="column column4-5">
            <p>
              Bacon ipsum dolor amet hamburger sausage andouille shank leberkas filet mignon chicken pig jowl tri-tip. Pancetta turducken strip steak kielbasa sirloin doner pork belly ham corned beef salami. Salami flank strip steak biltong landjaeger venison bresaola, filet mignon ground round picanha pork chop shank pig turducken pork belly. Shank strip steak tenderloin pork chop. Turducken shoulder tongue frankfurter tenderloin fatback shankle leberkas swine bacon.
              Ground round brisket alcatra, pig tenderloin meatball tongue venison chicken spare ribs. Boudin ribeye fatback frankfurter swine ham hock strip steak jowl alcatra jerky chicken capicola. Sausage pancetta cupim, kielbasa picanha ball tip beef boudin capicola doner jowl ribeye andouille. Ground round short ribs rump leberkas turkey jowl. Ham hock short loin turducken, brisket pancetta sirloin short ribs t-bone kielbasa flank cupim. Brisket pork belly pancetta fatback kielbasa pork chop pig.
            </p>
          </div>
        </div>

        <div className="row">
          <h3>Kokeile uutta tapausta eri näkökulmasta tai pohdi miten olisit voinut suoriuua vielä paremmin! </h3>
          <hr/>
          <h2> Valintasi pelin aikana: </h2>
          <img src="http://lorempizza.com/1500/400" alt="end_tree"/>
        </div>

        <Button to="intro">
          Lopeta
        </Button>
        <Button to="/">
          Uusi tapaus
        </Button>
      </View>
    );
  }
})
