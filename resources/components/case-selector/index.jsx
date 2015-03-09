import { default as React } from 'react/addons';
import { noop } from 'lodash';
import { default as Button } from 'components/button';
const {classSet} = React.addons;

export default React.createClass({
  getDefaultProps() {
    return {
      perspective: null,
      onSelect: noop
    };
  },
  onSelect(selectedCase) {
    return () => {
      this.props.onSelect(selectedCase);
    };
  },
  getInitialState() {
    return {
      selected: 0
    };
  },
  setNext() {
    var {cases} = this.props.perspective;
    this.setState({
      selected: Math.min(this.state.selected + 1, cases.length - 1)
    });
  },
  setPrev() {
    this.setState({
      selected: Math.max(this.state.selected - 1, 0)
    });
  },
  render() {

    var {cases, title} = this.props.perspective;

    var caseElements = cases.map((c, i) => {

      var classNames = classSet({
        'case': true
      });

      var style = {
        width: `${100 / cases.length}%`
      };

      return (
        <div style={style} className={classNames} key={c.title}>
          <div className="case__container">
            <img className="case__image" src={`http://lorempizza.com/380/240?${title + i}`} />
            <h3>{c.title}</h3>
          </div>
        </div>
      );
    });

    var style = {
      left: `-${this.state.selected * 100}%`,
      width: `${100 * cases.length}%`
    };

    return (
      <div className="case-selector">
        <h2>{title} caset</h2>

        {/* TODO real icons for arrows */}
        <div onClick={this.setNext} className="case-selector__arrow">
          &lt;&lt;
        </div>
        <div onClick={this.setPrev} className="case-selector__arrow case-selector__arrow--right">
          &gt;&gt;
        </div>

        <div className="case-selector__cases">
          <div className="case-selector__cases__container">
            <div style={style} className="case-selector__cases__slider">
              {caseElements}
            </div>
          </div>
        </div>

        <Button to="/case/234">
          Valitse Case
        </Button>
      </div>
    );
  }
})
