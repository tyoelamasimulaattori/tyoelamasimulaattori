import { default as React } from 'react';
import { default as Button } from 'components/button';
import { imagePath } from 'filters';
import { loginStore } from 'stores';
import { loginActions } from 'actions';

import { default as Login } from 'components/login';
import { default as Dropdown, Item } from 'components/dropdown';

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
  logOut() {
    loginActions.logout();
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
        <div className="user-profile__wrapper">
          <img src={imagePath('avatar.png')} />
          Matti Mattinen
        </div>

        <Dropdown>
          <Item>
            <i className="fa fa-wrench"></i>
            Tehtävä-editori
          </Item>
          <Item onClick={this.logOut}>
            <i className="fa fa-sign-out"></i>
            Kirjaudu ulos
          </Item>
        </Dropdown>
      </div>
    )
  }
});
