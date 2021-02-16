import React from 'react';
import './MonthFilter.css';
import arrowDown from '../../assets/images/arrow_down.svg';
import {MONTHS_ARR} from '../../data/shared.js';


class MonthFilter extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
        monthNumber: new Date().getMonth(),
        monthName: MONTHS_ARR[new Date().getMonth()],
        isDisabledNextBtn: false,
        isDisabledPrevBtn: false,
        btnNext: 'active',
        btnPrev: 'active'
      }
      // console.log(this.state);
    }

  handleClickOnButtonNext = () => {
    
    if (this.state.monthNumber > 9) {
      this.setState({
        isDisabledNextBtn: true,
        btnNext: 'disabled',
      })
    }
    
    this.setState({
      btnPrev: 'active',
      isDisabledPrevBtn: false,
      monthNumber: this.state.monthNumber+1,
      monthName: MONTHS_ARR[this.state.monthNumber+1]
    })
    this.props.callbackMonth(this.state.monthNumber+1);
    // console.log(this.state);
  }

  handleClickOnButtonPrev = () => {

    if (this.state.monthNumber < 2) {
      this.setState({
        isDisabledPrevBtn: true,
        btnPrev: 'disabled',
      })
    }
    
    this.setState({
      btnNext: 'active',
      isDisabledNextBtn: false,
      monthNumber: this.state.monthNumber-1,
      monthName: MONTHS_ARR[this.state.monthNumber-1]
    })
    this.props.callbackMonth(this.state.monthNumber-1);
    // console.log(this.state);
  }

  render() {
    // console.log(this.state);
    return (
      <div className="c-month-filter">
        <div className="pagination-wrap">
          <button className="pagination-btn" disabled={this.state.isDisabledNextBtn} onClick={this.handleClickOnButtonNext}>
            <svg className={`month-arrow-next btn-${this.state.btnNext}`} src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
              <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                  <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
              </g>
            </svg>
          </button>
          <p className="month-text">{this.state.monthName}</p>
          <button className="pagination-btn" disabled={this.state.isDisabledPrevBtn} onClick={this.handleClickOnButtonPrev}>
            <svg className={`month-arrow-prev btn-${this.state.btnPrev}`} src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
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
export default MonthFilter;