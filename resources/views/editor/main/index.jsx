import React from 'react';
import { Header } from 'components/view';
import { Button } from 'components';

export default React.createClass({
  render() {
    return (
      <div className="editor-main">
        <Header>Tehtävä-editori</Header>
        <p>
          Lorem ipsum Non in veniam aliqua culpa veniam ex consectetur enim dolore consequat do qui Excepteur consequat nulla enim Excepteur do laborum sit laborum qui amet.
        </p>
        <Button warning className="back" to="/">Takaisin alkunäkymään</Button>
      </div>
    );
  }
})