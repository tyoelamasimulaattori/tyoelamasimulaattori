import { default as React } from 'react';
import { findWhere } from 'lodash';
import { RouteHandler, Navigation } from 'react-router';
import { default as View } from 'components/view';
import { default as Button } from 'components/button';
import { default as PerspectiveSelector } from 'components/perspective-selector';
import { default as CaseSelector } from 'components/case-selector';

// TODO replace with real ones
import { mockPerspectives } from 'views/start/mock-perspectives';


export default React.createClass({
  mixins: [Navigation],
  getInitialState() {
    return {
      perspectives: mockPerspectives
    };
  },
  onPerspectiveSelect(selected) {
    var oldPerspectives = this.state.perspectives;

    this.setState({
      perspectives: oldPerspectives.map((perspective) => {
        perspective.selected = perspective === selected;
        return perspective;
      })
    });
  },
  onCaseSelect(selected) {
  },
  render() {
    var selectedPerspective = findWhere(this.state.perspectives, {
      selected: true
    });

    return (
      <View id="start-view">
        <h1>Valitse kyvykkyystekijä</h1>

        <PerspectiveSelector
          perspectives={this.state.perspectives}
          onSelect={this.onPerspectiveSelect} />

        <CaseSelector
          cases={selectedPerspective.cases}
          title={selectedPerspective.title}
          onSelect={this.onCaseSelect} />

        {/* Modals open inside of this RouteHandler */}
        <RouteHandler/>

      </View>
    );
  },
  componentDidMount() {
    // TODO Show intro on the first time user loads the application
    //this.transitionTo('intro');
  }
});
