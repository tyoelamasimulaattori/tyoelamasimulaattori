import { default as React } from 'react';
import { default as Button } from 'components/button';
import { default as View } from 'components/view';
import { imagePath } from 'filters';

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
    const route = this.props.previousSteps.map((step) => {
      return (
        <p>
          {step.description}
        </p>
      )
    });
    var modal = null;

    if(this.state.isModalOpen) {
        modal = (<div className="modal">
          <div className="modal__dialog">
            <h1>Demo on päättynyt</h1>
            <Button onClick={this.handleToggle}>
              Done
            </Button>
          </div>
        </div>)
    }
    else{
      modal.classSet("modal-hidden")
    }
    var backgroundStyle = {
      backgroundImage: `url(${imagePath(this.props.currentStep.image_name)})`
    };

    return (
      <View id="end-view">
        {modal}
        <h1>Loppunäkymä</h1>
        <div className="row">
          <div className="column column1-5" style={backgroundStyle} />

          <div className="column column4-5">
            <p>
              {this.props.currentStep.description}
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

        <Button to="/">
          Lopeta
        </Button>
      </View>
    );
  }
})
