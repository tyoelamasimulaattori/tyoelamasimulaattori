import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="person-card">
        <div className="person-card__header">
          <img className="person-card__thumbnail" src="http://lorempizza.com/380/240" />
          <h2>Matti Meikäläinen</h2>
          <h3>Ohjelmistosuunnittelija</h3>
        </div>
      </div>
    )
  }
});
