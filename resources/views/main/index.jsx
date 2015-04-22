import { default as React } from 'react';
import { findWhere, extend } from 'lodash';
import { RouteHandler } from 'react-router';

import {
  View,
  IconButton,
  Button,
  Modal,
  PerspectiveInfo,
  PerspectiveSelector,
  UserProfile,
  CaseSelector
} from 'components';

const { Dialog, Footer } = Modal;

import { default as DiscSelectView } from './disc-select';
import { default as IntroView } from './intro';

import { perspectiveActions, loginActions } from 'actions';
import { perspectiveStore, loginStore } from 'stores';

export {
  DiscSelectView as DiscSelectView,
  IntroView as IntroView
}

// TODO maybe a better place to store this?
let introShown = false;

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  getInitialState() {
    let state = this.getState();
    return extend(state, {
      selectedPerspective: null,
      isModalOpen: false
    });
  },
  toggleModal: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },
  onDataChange() {
    let newState = this.getState();

    const { perspectives } = newState;

    // Selects a perspective automatically when data is loaded
    /*if(!this.state.selectedPerspective && perspectives.length > 0) {
      const middleIndex = Math.ceil(perspectives.length/2) - 1;
      newState.selectedPerspective = perspectives[middleIndex];
    }*/

    this.setState(newState);
  },
  getState() {
    return {
      perspectives: perspectiveStore.getPerspectives()
    };
  },
  onPerspectiveSelect(selected) {
    this.setState({
      selectedPerspective: selected
    });
  },
  onCaseSelect(selected) {
    if(!selected.disabled){
      if(loginStore.isLoggedIn()){
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      else{
        this.onCaseSelectNoLogin();
      }
    }
  },
  onCaseSelectNoLogin() {
    this.context.router.transitionTo('step', {
      id: 0,
      step: 0
    });
  },
  onCaseSelectLogin() {
    this.context.router.transitionTo('step', {
      id: 0,
      step: 2
    });
  },
  render() {

    let { selectedPerspective, perspectives } = this.state;
    let caseSelector = null;

    const modal = (
      <Modal className="conf-modal"hidden={!this.state.isModalOpen} onCloseIntention={this.toggleModal}>
        <Dialog>
          <h3>Keskeytetty istunto</h3>
          <p>
            Haluatko jatkaa keskeytettyä istuntoa vai haluatko aloittaa tapauksen uudelleen alusta?
          </p>
          <Footer>
            <Button onClick={this.onCaseSelectLogin}>
              Jatka tapausta
            </Button>
            <Button onClick={this.onCaseSelectNoLogin}>
              Uusi tapaus
            </Button>
            <Button onClick={this.toggleModal}>
              Peruuta
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    );

    if(selectedPerspective) {
      caseSelector = (
        <div>
          <h2>
            Valitse tapaus näkökulmasta <strong>{selectedPerspective.title}</strong>
          </h2>
          <CaseSelector
          cases={selectedPerspective.cases}
          onSelect={this.onCaseSelect} />
        </div>
      )
    }

    return (
      <View id="start-view">
        <h1 className="view__header">Valitse näkökulma</h1>
        <PerspectiveSelector
          perspectives={perspectives}
          onSelect={this.onPerspectiveSelect}
          selected={selectedPerspective} />

        <div className="main-view__header">
           <UserProfile />
        </div>

        <IconButton to="intro">
          <i className="fa fa-question"></i>
        </IconButton>
        {modal}
        {caseSelector}
        <PerspectiveInfo />

        {/* Modals open inside of this RouteHandler */}
        <RouteHandler/>

      </View>
    );
  },
  componentDidMount() {
    this.unsubscribe = perspectiveStore.listen(this.onDataChange);
    if(!introShown) {
      this.context.router.transitionTo('intro');
      introShown = true;
    }
  },
  componentWillUnmount() {
    this.unsubscribe();
  },
  statics: {
    willTransitionTo: function () {
      return perspectiveActions.getPerspectives();
    }
  }
});
