import { default as React } from 'react';
import { Button, Controls, View } from 'components';
import { imagePath } from 'filters';
import { findLast } from 'lodash';

import { default as classNames } from 'classnames';

export default React.createClass({
  getInitialState() {
    return {
      isModalOpen: true
    };
  },
  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },
  render() {
    const currentStep = findLast(this.props.currentCase.steps);

    const classes = classNames({
      'modal': true,
      'modal--hidden': !this.state.isModalOpen,
    });

    const modal = (
      <div className={classes}>
        <div className="modal__dialog">
          <h1>Demo on päättynyt</h1>
          <p>
            Tämä demo työelämäsimulaattorista loppuu tähän. Lopullisessa pelissä tulee olemaan
            monta tapausta, joissa askeleita on paljon enemmän.
          </p>

          <p>
            Kiitos kun kokeilit demoa! Paina alla olevaa nappian nähdäksesi valintojesi
            lopputuloksen.
          </p>
          <div className="modal__footer">
            <Button onClick={this.handleToggle}>
              Loppunäkymään
            </Button>
          </div>
        </div>
      </div>
    )

    return (
      <View id="end-view">
        <h1>Loppunäkymä</h1>

        <div className="row">
          <div className="column column1-5">
            <img src={imagePath(currentStep.image)} />
          </div>
          <div className="column column4-5">
            <p>
              {currentStep.description}
            </p>
            <p>
              Olet tullut demovaiheen loppuun, ja valitettavasti demovaiheessa ei voi jatkaa pidemmälle.
              Muistitko ottaa huomioon vastapuolen DiSC-profiilin?
              Kokeile uutta tapausta eri näkökulmasta tai pohdi miten olisit voinut suoriuua vielä paremmin!
            </p>
          </div>
        </div>

        <p>
          Olet tullut demovaiheen loppuun, ja valitettavasti demovaiheessa ei voi jatkaa pidemmälle.
          Muistitko ottaa huomioon vastapuolen DiSC-profiilin? Kokeile uutta tapausta eri näkökulmasta tai pohdi miten olisit
          voinut suoriuua vielä paremmin! 
        </p>
        <hr />
        <p> Tässä valintasi graaffisessa muodossa: </p>
        <img src={imagePath("ending.png")} />

        <Controls>
          <Button to="/">Lopeta</Button>
        </Controls>

        {modal}
      </View>
    );
  }
})
