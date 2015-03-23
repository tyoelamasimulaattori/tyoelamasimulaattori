import { default as React } from 'react/addons';
import { noop } from 'lodash';
import { imagePath } from 'filters';
const {classSet} = React.addons;

export default React.createClass({
  getDefaultProps() {
    return {
      perspectives: [],
      onSelect: noop
    };
  },
  onSelect(perspective) {
    return () => {
      this.props.onSelect(perspective);
    };
  },

  render() {
    var style = {
      width: `${100 / this.props.perspectives.length}%`
    };

    var perspectives = this.props.perspectives.map((perspective) => {

      var classNames = classSet({
        perspective: true,
        'perspective--selected': perspective === this.props.selected,
        [`perspective--${perspective.id}`]: true
      });

      return (
        <div key={perspective.id} style={style} className={classNames} onClick={this.onSelect(perspective)}>
          <img className="perspective__icon" src={imagePath(perspective.image)} />
          <h3>{perspective.title}</h3>
          <p>{perspective.description}</p>
        </div>
      );
    });

    return (
      <div className="perspective-selector">
        {perspectives}
      </div>
    );
  }
})
