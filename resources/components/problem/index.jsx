import { default as React } from 'react';
import { default as Button } from 'components/button';
import { noop } from 'lodash';

export default React.createClass({
  getDefaultProps() {
    return {
      answers: [],
      onSelect: noop
    };
  },
  onSelect(answer) {
    return () => this.props.onSelect(answer);
  },
  tip() {
     return confirm ('Mieti, miten voisit tehdä kompromissin, joka sopii kaikille osapuolille.');
  },
  render() {

    const answers = this.props.answers.map((option) => {
      return (
        <div className="question" key={option.id} onClick={this.onSelect(option)}>
          {option.text}
        </div>
      )
    });

    return (
      <div>
        <div className="problem__description">
          <h2>Kuvaus: </h2>
          <h3>{this.props.name}</h3>
          <p>{this.props.description}</p>
          <Button onClick={this.tip}>Vihje</Button>
        </div>

        <div className="problem__questions">
          {answers}
        </div>
      </div>
    )
  }
});
