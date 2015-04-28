import React from 'react';
import { Header } from 'components/view';
import { Button } from 'components';

export default React.createClass({
  render() {
    return (
      <div className="editor-main">
        <Header>Tehtävä-editori</Header>
        <p>
           Aloita haluamasi casen muokkaaminen painamalla vasemmalta +Luo uusi -nappia, ja sen jälkeen valitse listasta case, jota haluat muokata.
        </p>
        <Button warning id="back" to="/">Takaisin alkunäkymään</Button>
      </div>
    );
  }
})