import React from 'react';
import { Button } from 'components';

export default React.createClass({
  render() {
    return (
      <div className="editor-main">
        <p>
           Luo uusi tapaus painamalla vasemmalta "Luo uusi" -nappia tai valitse listasta tapaus, jota haluat muokata.
        </p>
        <Button warning id="back" to="/">Takaisin alkunäkymään</Button>
      </div>
    );
  }
})
