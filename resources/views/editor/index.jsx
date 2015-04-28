import React from 'react';
import { RouteHandler } from 'react-router';
import { chain, findWhere } from 'lodash';
import { Sidebar, IconButton, View, UserProfile, CaseList, Modal, Button } from 'components';
import { caseStore, perspectiveStore } from 'stores';

import { default as EditorEditView} from './edit';
import { default as EditorMainView} from './main';

import { Container, Content, Header } from 'components/view';

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
    this.setState({
      currCase: selectedCase
    });
    this.context.router.transitionTo('edit', {
      id: selectedCase.id,
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
            onSelect={this.onCaseSelected}
            selected={this.state.currCase}/>
        )
      }).value();

    const helpModal = (
      <Modal hidden={!this.state.isHelpModalOpen} onCloseIntention={this.toggleHelpModal}>
        <Dialog>
          <h1>Näin käytät Editoria</h1>
          <p>
            <ul>
               <li>Paina vasemmalla sivupalkissa olevaa nappia +Luo uusi.</li>
               <li>Valitse sen jälkeen sivupalkista sen näkökulman alta ja sen niminen case, jonka haluat luoda.</li>
               <li>Kirjoita kohtaan Henkilö casen päähenkilön nimi ja kohtaan Lyhyt kuvaus sananmukaisesti lyhyt kuvaus henkilöstä (esim. ammatti, perhesuhteet ym).</li>
               <li>Painamalla +-nappia Vaiheet-sanan alapuolelta voit lisätä casen steppejä haluamasi määrän.</li>
               <li>Kirjoita kunkin tilanteen kuvaus ja sitä vastaavat vastausvaihtoehdot.</li>
               <li>Tallenna tekemäsi muutokset painamalla Tallenna-nappia.</li>
               <li>Voit myös peruuttaa tekemäsi muutokset painamalla Peruuta-nappia.</li>
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

        <Container>
          <Header>
            <IconButton onClick={this.toggleHelpModal}>
               <i className="fa fa-question"></i>
            </IconButton>
            <UserProfile />
          </Header>
          <Content>
            <RouteHandler {...this.props} />
          </Content>
        </Container>
        {helpModal}
      </View>
    );
  },
  getInitialState() {
    return this.getState();
  },
  getState() {
    return {
      cases: caseStore.getCases(),
      perspectives: perspectiveStore.getPerspectives(),
      isHelpModalOpen: false,
      currCase: null
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
