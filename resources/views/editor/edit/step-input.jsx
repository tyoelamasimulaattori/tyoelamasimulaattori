import React from 'react';
import {Button} from 'components';

export default React.createClass({
  getInitialState() {
    return {
      selectedStep: null
    };
  },
  getDefaultProps() {
    return {
      steps: []
    };
  },
  renderStep(step) {
    return (
      <div className="step-input">
        <textarea key={step.id} value={step.description}></textarea>
        <h4>Vastausvaihtoehdot</h4>
        <table className="step-options-list">
          <thead>
            <tr>
              <th>Teksti</th>
              <th>Oikea vastaus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" /></td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="checkbox" /></td>
            </tr>
            <tr>
              <td><input type="text" /></td>
              <td><input type="checkbox" /></td>
            </tr>
          </tbody>

        </table>
      </div>
    )
  },
  onStepSelect(step) {
    return () => {
      this.setState({
        selectedStep: step
      });
    }
  },
  selectFirstStep(props = this.props) {
    this.setState({selectedStep: props.steps[0]})
  },
  componentWillReceiveProps(nextProps) {
    if(nextProps.steps !== this.props.steps) {
      this.selectFirstStep(nextProps);
    }
  },
  componentDidMount() {
    this.selectFirstStep();
  },
  render() {
    const buttons = this.props.steps.map((step) => {
      return (
        <Button active={step === this.state.selectedStep} key={step.id} onClick={this.onStepSelect(step)}>
          {step.id}
        </Button>
      )
    });

    let visibleStep = null;

    if(this.state.selectedStep) {
      visibleStep = this.renderStep(this.state.selectedStep);
    }

    return (
      <div>
        <h2>Vaiheet</h2>

        <div className="step-buttons">
          {buttons}
          <Button><i className="fa fa-plus"></i></Button>
        </div>

        {visibleStep}
      </div>
    );
  }
});
