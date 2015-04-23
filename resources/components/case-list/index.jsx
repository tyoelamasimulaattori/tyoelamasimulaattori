import { default as React } from 'react';
import { imagePath } from 'filters';

export default React.createClass({
  render() {
    const cases = this.props.cases.map((c) => {
      return (
        <li key={c.id}>
          <img src={imagePath(c.image)} />
          {c.name}
        </li>);
    });
    return (
      <ul className="case-list">{cases}</ul>
    );
  }
});
