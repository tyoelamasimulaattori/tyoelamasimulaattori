import { default as React } from 'react';

export default React.createClass({
  render() {
    return (
      <div className="person-card">
        <div className="person-card__header">
          <img className="person-card__thumbnail" src="/images/1.png" />
          <h2>Matti Meikäläinen</h2>
          <h3>Ohjelmistosuunnittelija</h3>
          <p> Matti on rauhallinen ja ystävällinen. Työskentele usein aamusta iltaan jos voi. Ei pidä paahtoleivästä.</p>
        </div>
      </div>
    )
  }
});
