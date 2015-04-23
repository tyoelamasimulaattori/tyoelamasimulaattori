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
  Feedback,
  Modal,
  UserProfile,
  Button
} from 'components';

const { Dialog, Footer } = Modal;

import { tipActions } from 'actions';
import { tipStore } from 'stores';

export default React.createClass({
  getInitialState() {
    return {
      isModalOpen: false,
      isHelpModalOpen: false,
      isConfModalOpen: false
    };
  },
  toggleModal: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  },
  popup(resource) {
    window.open(imagePath(resource));
  },
  toggleHelpModal: function () {
    this.setState({
      isHelpModalOpen: !this.state.isHelpModalOpen
    });
  },
  toggleConfModal: function () {
    this.setState({
      isConfModalOpen: !this.state.isConfModalOpen
    });
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  onQuit() {
    return confirm('Haluatko varmasti keskeyttää? Tilannettasi ei tallenneta ja siirryt alkunäkymään.');
  },
  onSave() {
    return confirm('Haluatko varmasti lopettaa? Edistymisesi pelissä tallennetaan ja voit siirtyä alkunäkymään.');
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
      <Modal hidden={!this.state.isModalOpen} onCloseIntention={this.toggleModal}>
        <Dialog>
          <h1>Toimintajärjestelmäkuvio</h1>
          <p>
            --Selvitys mikä on Toimintajärjestelmäkuvio tähän--
          </p>
          <img src={imagePath("kolmioSelitys.png")} />
          <p>
            Tähän tulisi asettaa tarkempi selitys nykyisestä kolmiosta, jotta käyttäjä ymmärtää mitä ihmettä tapahtuu ja miksi.
          </p>
          <img src={imagePath("kolmio.png")} />
          <Footer>
            <Button onClick={this.toggleModal}>
              Takaisin
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    )
	
   const helpModal = (
      <Modal hidden={!this.state.isHelpModalOpen} onCloseIntention={this.toggleHelpModal}>
        <Dialog>
          <h1>Näin pelaat Työelämäsimulaattoria</h1>
          <p>
            <ul>
               <li>Lue tilanteen eli stepin kuvaus huolellisesti.</li>
               <li>Valitse parhaiten sopiva vaihtoehto kuvauksen alla olevista vaihtoehdoista.</li>
               <li>Vastauksen avuksi voi käyttää vihjettä, joka saat painamalla Vihje-nappulaa kuvauksen alta.</li>
               <li>Valittuasi vaihtoehdon pääset palautteeseen, joka määrittyy vastaamasi vastauksen mukaan.</li>
               <li>Lue palaute huolellisesti.</li>
               <li>Luettuasi palautteen paina Jatka-nappulaa, ja pääset uuteen tilanteeseen eli steppiin.</li>
            </ul>
          </p>
          <Footer>
            <Button onClick={this.toggleHelpModal}>
              Jatka simulaattoria
            </Button>
          </Footer>
        </Dialog>
      </Modal>
   )
    const confModal = (
      <Modal className="conf-modal"hidden={!this.state.isConfModalOpen} onCloseIntention={this.toggleConfModal}>
        <Dialog>
          <h3>Lopeta peli</h3>
          <p>
            Haluatko tallentaa pelin?
          </p>
          <Footer>
            <Button to="/">
              Tallenna
            </Button>
            <Button to="/">
              Älä tallenna
            </Button>
            <Button onClick={this.toggleConfModal}>
              Peruuta
            </Button>
          </Footer>
        </Dialog>
      </Modal>
    );

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
          <PersonCard name={name}
                      description={description}
                      image={imagePath(image)}
                      title={title} />

          <h3>Lisämateriaalit: </h3>
          <Accordion tips={tipStore.getTips()}
                     onClick={this.toggleModal}
                     popup={this.popup}/>
        </Sidebar>

        <div className="step-view__container" style={style}>
          <div className="step-view__header">
            <IconButton onClick={this.toggleHelpModal}>
               <i className="fa fa-question"></i>
            </IconButton>
            <UserProfile />
          </div>
          <div className="problem">
            {problem}
            {feedback}
            <div className="problem__footer">
              <Controls>
                 <Button warning onClick={this.toggleConfModal}>
                    Lopeta
                 </Button>
              </Controls>
            </div>
            {confModal}
            {helpModal}
            {modal}
          </div>
        </div>
      </View>
    );
  }
})
