import { default as React } from 'react';
import { imagePath } from 'filters';
import { noop, compact } from 'lodash';
import { default as classNames } from 'classnames';

export default React.createClass({
  getDefaultProps() {
    return {
      onSelect: noop
    };
  },

  render() {
    const cases = this.props.cases.map((c) => {
      const classes = classNames({
        "caselist": true,
        "caselist--selected": c === this.props.selected
      });
      return (
        <li className={classes} onClick={this.props.onSelect.bind(null, c)} key={c.id}>
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
