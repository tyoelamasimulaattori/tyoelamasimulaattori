import { default as React } from 'react';
import classNames from 'classnames';

export default React.createClass({
    getDefaultProps() {
      return {
        hidden: false
      };
    },
    render() {
      const classes = classNames({
        'perspective-info': true,
        'perspective-info--hidden': this.props.hidden
      });
    return (
      <div className ={classes}>
        <h2> Näkökulmavalikon käyttö </h2>
        <p>
          Tämän tekstin yläpuolella olevat vaihtoehdot Johtaminen, esimiestoiminta, toimintakulttuuri, prosessit ja työtavat, ja osaaminen,
          ovat näkökulmia, joiden mukaan simulaattorin tapaukset ovat jaettu. Painamalla yhtä näkökulmista, sinulle esitetään joukko tehtäviä, joista voit valita yhden pelattavaksi.
          Jos tapauksen kuvakkeen päällä on lukko, se tarkoittaa, ettei tapaus ole vielä auennut pelattavaksi.
        </p>

        <p> Kun olet mielestäsi valmis, ole hyvä ja valitse yksi näkökulmista. Hyviä pelihetkiä! </p>
      </div>
    )
  }
});
