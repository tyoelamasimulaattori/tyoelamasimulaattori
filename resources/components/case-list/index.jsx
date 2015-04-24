import { default as React } from 'react';
import { imagePath } from 'filters';
import { compact } from 'lodash';

export default React.createClass({
  render() {
    const cases = this.props.cases.map((c) => {
      return (
        <li key={c.id}>
          <img src={imagePath(c.image)} />
          {c.name}
        </li>);
    });

    const className = compact(['case-list', this.props.className]).join(' ');
    const list = <ul>{cases}</ul>;

    if(!this.props.title) {
      return (
        <div {...this.props} className={className}>
          {list}
        </div>
      )
    }
    return (
        <div {...this.props} className={className}>
          <h4 className="case-list__header">{this.props.title}</h4>
          {list}
        </div>
    );

  }
});
