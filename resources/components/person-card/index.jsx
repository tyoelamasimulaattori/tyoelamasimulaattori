import { default as React } from 'react';

export default React.createClass({
  propType: {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="person-card">
        <div className="person-card__header">
          <img className="person-card__thumbnail" src={this.props.image} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
});
