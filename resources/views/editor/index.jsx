import React from 'react';
import { RouteHandler } from 'react-router';
import { chain, findWhere } from 'lodash';
import { Sidebar, IconButton, View, UserProfile, CaseList, Modal, Button } from 'components';
import { caseStore, perspectiveStore } from 'stores';

import { default as EditorEditView} from './edit';
import { default as EditorMainView} from './main';

import { Container } from 'components/view';

const { Dialog, Footer } = Modal;

export {
  EditorMainView as EditorMainView,
  EditorEditView as EditorEditView
}

export default React.createClass({
  toggleHelpModal: function () {
    this.setState({
      isHelpModalOpen: !this.state.isHelpModalOpen
    });
  },
  toPerspectiveName(id) {
    const perspective = findWhere(this.state.perspectives, {id:id});
    if(!perspective) return id;
    return perspective.title;
  },
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  onCaseSelected(selectedCase) {
    this.context.router.transitionTo('edit', {
      id: selectedCase.id
    })
  },
  render() {
    const caseLists = chain(this.state.cases)
      .groupBy('perspective_id').toArray().map((caseGroup) => {
        const id = caseGroup[0].perspective_id;
        return (
          <CaseList
            key={id}
            title={this.toPerspectiveName(id)}
            className={`perspective--${id}`}
            cases={caseGroup}
            onSelect={this.onCaseSelected} />
        )
      }).value();

    const helpModal = (
      <Modal hidden={!this.state.isHelpModalOpen} onCloseIntention={this.toggleHelpModal}>
        <Dialog>
          <h1>Näin käytät Editoria</h1>
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

    return (
      <View id="editor-view">
        <Sidebar>
          <IconButton to="new">
            <i className="fa fa-plus"></i> Luo uusi
          </IconButton>
            {caseLists}
        </Sidebar>

        <IconButton onClick={this.toggleHelpModal}>
          <i className="fa fa-question"></i>
        </IconButton>

        <Container>
          <RouteHandler {...this.props} />
        </Container>
        {helpModal}
      </View>
    );
  },
  getInitialState() {
    return this.getState();
	isHelpModalOpen: false
  },
  getState() {
    return {
      cases: caseStore.getCases(),
      perspectives: perspectiveStore.getPerspectives()
    }
  },
  onDataChange() {
    this.setState(this.getState);
  },
  componentDidMount() {
    this.unsubscribes = [
      caseStore.listen(this.onDataChange),
      perspectiveStore.listen(this.onDataChange)
    ]
  },
  componentWillUnmount() {
    this.unsubscribes.forEach((f) => f());
  }
})