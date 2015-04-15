import { default as React } from 'react';
import { findWhere } from 'lodash';
import { imagePath } from 'filters';

import {
  View,
  Accordion,
  Panel,
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
      isModalOpen: false
    };
  },
  handleToggle: function () {
    this.setState({
      isModalOpen: !this.state.isModalOpen
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
      <Modal hidden={!this.state.isModalOpen}>
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
            <Button onClick={this.handleToggle}>
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
          answers={currentStep.answers}
          onSelect={this.showFeedback} />
      );
    }

    var style = {
      backgroundImage: `url(${imagePath(currentStep.image)})`
    };

    return (
      <View id="step-view">
        <div className="sidebar">
          <PersonCard name={name}
                      description={description}
                      image={imagePath(image)}
                      title={title} />

          <h3>Lisämateriaali: </h3>
          <Accordion tips={tipStore.getTips()}
                     onClick={this.handleToggle}/>
        </div>

        <div className="step-view__container" style={style}>
          <div className="step-view__header">
            <UserProfile />
          </div>

          <div className="problem">
            {problem}
            {feedback}
            <div className="problem__footer">
              <Controls>

                <Button to="/" onClick={this.onSave}>
                  Tallenna ja keskeytä
                </Button>
                <Button warning to="/" onClick={this.onQuit}>
                  Lopeta tapaus
                </Button>
              </Controls>
            </div>
            {modal}
          </div>
        </div>
      </View>
    );
  }
})
