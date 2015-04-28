import React from 'react';
import Reflux from 'reflux';
import {findWhere} from 'lodash';
import {caseStore} from 'stores';
import {Form, Controls, Button} from 'components';

import StepInput from './step-input';

export default React.createClass({
  mixins: [Reflux.listenTo(caseStore, 'onDataChange')],
  onDataChange() {
    this.setState(this.getState(this.props));
  },
  getState(props) {

    const isNew = id === 'new';

    if(isNew) {

      if(!this.state.selectedCase) {
        return {
          selectedCase: {}
        };
      }

      return;
    }

    const cases = caseStore.getCases();
    const {id} = props.params;

    const selectedCase = findWhere(cases, {
      id: parseInt(id)
    });
    return {selectedCase};
  },
  getInitialState() {
    return this.getState(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this.setState(this.getState(nextProps));
  },
  render() {

    if(!this.state.selectedCase) {
      return null;
    }

    const { selectedCase } = this.state;

    let person = null;
    if(selectedCase.person) {
      person = (
        <div>
          <h2>Henkilö</h2>
          <label>Etunimi</label>
          <input type="text" value={selectedCase.person.name }/>
          <label>Lyhyt kuvaus</label>
          <input type="text" value={selectedCase.person.description }/>
        </div>
      )
    }

    return (
      <Form>
        <section>
          {person}
        </section>
        <section>
          <StepInput steps={selectedCase.steps} />
        </section>

        <Controls>
          <Button>Tallenna</Button>
          <Button warning>Peruuta</Button>
          <Button warning id="back" to="editor">Takaisin</Button>
        </Controls>
      </Form>
    );
  }
})