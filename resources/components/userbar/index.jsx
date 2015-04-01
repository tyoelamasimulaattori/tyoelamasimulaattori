import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';

import { default as Login } from 'components/login';
import { default as Logout } from 'components/logout';

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
	  var login, logout;
	  
	  const {loggedIn} = this.state;
	  
	  if (loggedIn) {
         logout = <Logout onLogout={this.onLogout} />
      } else {
         login = <Login onLogin={this.onLogin} />
      }

      return (
	     <div className="userbar"> 
            {login}
			{logout}
         </div>
      )
   }
});