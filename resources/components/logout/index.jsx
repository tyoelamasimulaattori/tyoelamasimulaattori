import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';

import { default as classNames } from 'classnames';

export default React.createClass({

   render() {
      var button;
      button = <Button onClick={this.props.onLogout}>Kirjaudu ulos</Button>
	  return (
         <div className="logout">
            <p> Olet kirjautunut nimellä <strong>Matti Mattinen</strong>.</p>
            {button}
         </div>
      )
   }
});