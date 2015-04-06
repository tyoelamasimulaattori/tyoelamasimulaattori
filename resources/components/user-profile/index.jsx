import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';

import { default as Login } from 'components/login';

import { default as classNames } from 'classnames';

export default React.createClass({
  getInitialState() {
    return {
      loggedIn: false
    };
  },
  logIn() {
    this.setState({
      loggedIn: true
    });
  },
  render() {
    if(!this.state.loggedIn) {
      return <Login onClick={this.logIn} />;
    }
    return (
      <div className="user-profile">
        <img src={imagePath('avatar.png')} />
        Matti Mattinen
      </div>
    )
  }
});
