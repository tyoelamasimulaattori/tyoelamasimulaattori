import { default as React } from 'react';
import { default as Button } from 'components/button';

export default React.createClass({
  render() {
    return (
      <Button className="login" {...this.props}>
        <i className="fa fa-sign-in" />
        Kirjaudu sisään
      </Button>
    )
  }
});
