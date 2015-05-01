import { default as React } from 'react';
import { findWhere } from 'lodash';
import { imagePath } from 'filters';

import {
  View,
  Accordion,
  Panel,
  IconButton,
  Controls,
  PersonCard,
  Problem,
  ProgressBar,
  Feedback,
  Modal,
  UserProfile,
  SaveGameModal,
  GameHelpModal,
  Sidebar,
  Button
} from 'components';

import { Container, Header } from 'components/view';
const { Dialog, Footer } = Modal;

import { tipActions } from 'actions';
import { tipStore } from 'stores';

export default React.createClass({
  getInitialState() {
    return {
      openModal: null
    };
  },
  toggleModal: function (modalName) {
    return () => {
      const nextModal = this.state.openModal === modalName ? null : modalName;
      this.setState({
        openModal: nextModal
      });
    };
  },
  popup(resource) {
    window.open(imagePath(resource));
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  backToStep() {
    let {currentCase, currentStep} = this.props;
    this.context.router.transitionTo('step', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep)
    });
  },
  toNextStep() {
    let {currentCase, currentStep} = this.props;

    this.context.router.transitionTo('step', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep) + 1
    });
  },
  showFeedback(answer) {
    let {currentCase, currentStep} = this.props;

    this.context.router.transitionTo('feedback', {
      id: currentCase.id,
      step: currentCase.steps.indexOf(currentStep),
      option: answer.id
    });
  },
  render() {
    const { name, title, description, image } = this.props.currentCase.person;
    const { currentStep } = this.props;
    var problem, feedback;

    const modal = (
      <Modal hidden={!(this.state.openModal === 'toimintajarjestelma')} onCloseIntention={this.toggleModal('toimintajarjestelma')}>
        <Dialog>
          <h1>Toimintajärjestelmäkuvio</h1>
          <p>
            --Selvitys mikä on Toimintajärjestelmäkuvio tähän--
          </p>
          <img src={imagePath("kolmioSelitys.png")} />
          <p>
            Tämän tapauksen keskeiset alueet ovat arkijohtaminen (työnjako, yhteiso ja tekijä) sekä kulttuuri ja motivaatio (tekijä, yhteisö ja kohde). Yritä pohtia tilannetta näistä alueista käsin.
          </p>
          <img src={imagePath("kolmio.png")} />
          <Footer>
            <Button onClick={this.toggleModal('toimintajarjestelma')}>
              Takaisin
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    )

    var tips = tipStore.getTips();

    if (this.props.params.option) {
      var answer = findWhere(currentStep.answers, {
        id: parseInt(this.props.params.option)
      });
      feedback = (
        <Feedback
          onNextStep={this.toNextStep}
          onBack={this.backToStep}
          text={answer.feedback}
          correct={answer.correct} />
      );
    } else {
      problem = (
        <Problem
          name={this.props.currentCase.name}
          description={currentStep.description}
          id={currentStep.id}
          answers={currentStep.answers}
          onSelect={this.showFeedback} />
      );
    }

    var style = {
      backgroundImage: `url(${imagePath(currentStep.image)})`
    };

    return (
      <View id="step-view">
        <Sidebar>
          <img src={imagePath("pshp_elaman_tahden.png")} />
          <PersonCard name={name}
                      description={description}
                      image={imagePath(image)}
                      title={title} />

          <h3>Lisämateriaalit: </h3>
          <Accordion tips={tipStore.getTips()}
                     onClick={this.toggleModal('toimintajarjestelma')}
                     popup={this.popup}/>

        <h3>Edistyminen:</h3>
        <ProgressBar steps={this.props.currentCase.steps}
                     step={currentStep.id}/>
        </Sidebar>
        <Container style={style}>
          <Header>
            <IconButton onClick={this.toggleModal('game-help')}>
               <i className="fa fa-question"></i>
            </IconButton>
            <UserProfile />
          </Header>
          <div className="problem">
            {problem}
            {feedback}
            <div className="problem__footer">
              <Controls>
                 <Button warning onClick={this.toggleModal('save-game')}>
                    Lopeta
                 </Button>
              </Controls>
            </div>
            {modal}
            <GameHelpModal
              onCancel={this.toggleModal('game-help')}
              hidden={!(this.state.openModal === 'game-help')}
              onCloseIntention={this.toggleModal('game-help')} />

            <SaveGameModal
              hidden={!(this.state.openModal === 'save-game')}
              onCloseIntention={this.toggleModal('save-game')}
              onCancel={this.toggleModal('save-game')} />
          </div>
        </Container>
      </View>
    );
  }
})
