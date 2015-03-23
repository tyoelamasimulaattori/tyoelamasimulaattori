import { default as React } from 'react';
import { default as Button } from 'components/button';
import { default as Controls } from 'components/controls';
import { default as View } from 'components/view';
import { imagePath } from 'filters';
import { findWhere } from 'lodash';

const {classSet} = React.addons;

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
    const currentStep = findWhere(this.props.currentCase.steps, {
      end: true
    });

    const classNames = classSet({
      'modal': true,
      'modal--hidden': !this.state.isModalOpen,
    });

    const modal = (
      <div className={classNames}>
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
          <Button onClick={this.handleToggle}>
            Loppunäkymään
          </Button>
        </div>
      </div>
    )

    return (
      <View id="end-view">
        <h1>Loppunäkymä</h1>

        <div className="row">
          <div className="column column1-5" style={backgroundStyle} />
          <div className="column column4-5">
            <p>
              {currentStep.description}
            </p>
          </div>
        </div>

        <div className="row">
          <h3>Olet tullut demovaiheen loppuun, ja valitettavasti demovaiheessa ei voi jatkaa pidemmälle.</h3>
          <h3>Muistitko ottaa huomioon vastapuolen DiSC-profiilin?</h3>
          <h3>Kokeile uutta tapausta eri näkökulmasta tai pohdi miten olisit voinut suoriuua vielä paremmin! </h3>
          <hr/>
          <h2> Valintasi pelin aikana: </h2>
          <h3>{route}</h3>
          <img src="http://lorempizza.com/1500/400" alt="end_tree"/>
        </div>
        <Controls>
          <Button to="/">Lopeta</Button>
        </Controls>

        {modal}
      </View>
    );
  }
})
