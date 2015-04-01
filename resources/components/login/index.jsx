import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';

import { default as classNames } from 'classnames';

export default React.createClass({
   getInitialState() {
      return {
        loggedIn: false
      };
   },
   onLogin() {
      this.setState({loggedIn: true});
   },
   onLogout() {
      this.setState({loggedIn: false})
   },
   render() {
      var button;
	  const {loggedIn} = this.state;
	  if (!loggedIn) {
	     button = <Button onClick={this.onLogin}>Kirjaudu sisään</Button>
      } else {
         button = <Button onClick={this.onLogout}>Kirjaudu ulos</Button>
      }

      return (
	     <div className="login"> 
		    <p> aaa </p>
		    {button}
         </div>
      )
   }
});