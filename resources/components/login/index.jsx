import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';

import { default as classNames } from 'classnames';

export default React.createClass({

   render() {
      var button;
      button = <Button onClick={this.props.onLogin}>Kirjaudu sisään</Button>
	  return (
         <div className="login">
		    <h3> PSHP:n työelämäsimulaattori </h3>
            {button}
         </div>
      )
   }
});