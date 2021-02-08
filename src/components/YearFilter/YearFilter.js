import React from 'react';
import './YearFilter.css';
import arrowDown from '../../assets/images/arrow_down.svg';

class YearFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    year: new Date().getFullYear(),
    }
  }

  handleClickOnButtonNext = () => {
    this.setState({
      year: this.state.year+1,
    })
    this.props.callbackYear(this.state.year+1);
    // console.log(this.state);
  }

  handleClickOnButtonPrev = () => {
    this.setState({
      year: this.state.year-1
    })
    this.props.callbackYear(this.state.year-1);
    // console.log(this.state);
  }

  render () {
    return (
      <div className="c-year-filter">
        <div className="pagination-wrap">
          <button className="pagination-btn" onClick={this.handleClickOnButtonNext}>
            <svg className="month-arrow-next btn-active" src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
              <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                  <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
              </g>
            </svg>
          </button>
          <p className="month-text">{this.state.year}</p>
          <button className="pagination-btn" onClick={this.handleClickOnButtonPrev}>
            <svg className="month-arrow-prev btn-active" src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
              <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                  <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
    )
  }
}
export default YearFilter;