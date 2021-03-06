import { default as React } from 'react';
import { default as classNames } from 'classnames';
import { noop } from 'lodash';

import { imagePath } from 'filters';

export default React.createClass({
  getDefaultProps() {
    return {
      cases: [],
      title: '',
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
    var {cases} = this.props;
    this.setState({
      selected: Math.min(this.state.selected + 1, cases.length - 1)
    });
  },
  setPrev() {
    this.setState({
      selected: Math.max(this.state.selected - 1, 0)
    });
  },
  componentWillReceiveProps() {
    this.setState(this.getInitialState());
  },
  render() {

    var {cases, title} = this.props;
    const sortedCases = cases.sort((a, b) => a.id - b.id);

    const caseElements = sortedCases.map((c, i) => {

      const classes = classNames({
        'case': true,
        'case--selected': i === this.state.selected
      });

      var style = {
        width: `${100 / cases.length}%`
      };

      var backgroundStyle = {
        backgroundImage: `url(${imagePath(c.image)})`
      };

      return (
        <div style={style} className={classes} key={c.id} onClick={this.onSelect(c)}>
          <div className="case__container">
            <div className="case__image" style={backgroundStyle}></div>
            <h3 className="case__title">{c.name}</h3>
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
        {/* TODO real icons for arrows */}
        <div onClick={this.setPrev} className="case-selector__arrow">
          <i className="fa fa-arrow-left"></i>
        </div>
        <div onClick={this.setNext} className="case-selector__arrow case-selector__arrow--right">
          <i className="fa fa-arrow-right"></i>
        </div>


        <div className="case-selector__cases">
          <div className="case-selector__cases__container">
            <div style={style} className="case-selector__cases__slider">
              {caseElements}
            </div>
          </div>
        </div>
      </div>
    );
  }
})
