import { default as React } from 'react';
import { default as Button } from 'components/button';

export default React.createClass({
  render() {

    var style = {
      backgroundImage: 'url(http://lorempizza.com/1280/1280)'
    };

    return (
      <div className="problem" style={style}>
        <div className="problem__description">
          <h3>Matin alkoholiongelma</h3>
          <p>
            Matilla on alkoholiongelma ja on ilmaantunut töihin lievässä humalassa. Hän häiritsee muita ja käyttäytyy tyhmästi. Miten lähestyt tilannetta?
          </p>
          <Button>Vihje</Button>
        </div>
        <div className="problem__questions">
          <div className="question">
            a. Auta Mattia
          </div>
          <div className="question">
            b. Hauku Mattia
          </div>
          <div className="question">
            c. Kiusaa Mattia
          </div>
          <div className="question">
            d. Tue Mattia
          </div>
        </div>
      </div>
    )
  }
});
