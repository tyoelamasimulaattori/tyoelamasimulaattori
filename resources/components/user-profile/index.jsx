import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';
import { loginStore } from 'stores';
import { loginActions } from 'actions';

import { default as Login } from 'components/login';

import { default as classNames } from 'classnames';

export default React.createClass({
  getInitialState() {
    return this.getState();
  },
  getState() {
    return {
      loggedIn: loginStore.isLoggedIn()
    };
  },
  logIn() {
    loginActions.showLoginModal();
  },
  onDataChange() {
    this.setState(this.getState());
  },
  componentDidMount() {
    this.removeListener = loginStore.listen(this.onDataChange);
  },
  componentWillUnmount() {
    this.removeListener();
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
