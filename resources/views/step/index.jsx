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
            Tämän tapauksen keskeiset alueet ovat arkijohtaminen (työnjako, yhteiso ja tekijä) sekä kulttuuri ja motivaatio (tekijä, yhteisö ja kohde). Yritä pohtia tilannetta näistä alueista käsin.
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
          <h1>Näin pelaat Tilannehallintaa</h1>
          <p>
            <ul>
               <li>Lue kyseessä olevan tilanteen kuvaus huolellisesti.</li>
               <li>Valitse parhaiten sopiva vaihtoehto tilanteen kuvauksen alla olevista vaihtoehdoista.</li>
               <li>Vastauksen avuksi voi käyttää vihjettä, joka saat painamalla Vihje-nappulaa kuvauksen alta.</li>
               <li>Myös vasemmalta löytyvästä lisämateriaalipankista saat apua sekä tilanteen ratkaisemiseen että yleistä tietoa johtamisesta ja esimiestoiminnasta.</li>
               <li>Valittuasi vaihtoehdon pääset palautteeseen, joka määrittyy vastauksesi mukaan.</li>
               <li>Lue palaute huolellisesti.</li>
               <li>Luettuasi palautteen paina Jatka-nappulaa, ja pääset uuteen tilanteeseen eli steppiin.</li>
            </ul>
          </p>
          <Footer>
            <Button onClick={this.toggleHelpModal}>
              Takaisin
            </Button>
          </Footer>
        </Dialog>
      </Modal>
   )
    const confModal = (
      <Modal hidden={!this.state.isConfModalOpen} onCloseIntention={this.toggleConfModal}>
        <Dialog>
          <h3 id="conf-modal">Lopeta peli</h3>
          <p id="conf-modal">
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
          <img src={imagePath("pshp_elaman_tahden.png")} />
          <PersonCard name={name}
                      description={description}
                      image={imagePath(image)}
                      title={title} />

          <h3>Lisämateriaalit: </h3>
          <Accordion tips={tipStore.getTips()}
                     onClick={this.toggleModal}
                     popup={this.popup}/>

        <h3>Edistyminen:</h3>
        <ProgressBar steps={this.props.currentCase.steps}
                     step={currentStep.id}/>
        </Sidebar>
        <Container style={style}>
          <Header>
            <IconButton onClick={this.toggleHelpModal}>
               <i className="fa fa-question"></i>
            </IconButton>
            <UserProfile />
          </Header>
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
        </Container>
      </View>
    );
  }
})
