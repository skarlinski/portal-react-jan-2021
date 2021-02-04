import React from 'react';
import './MonthFilter.css';
import arrowDown from '../../assets/images/arrow_down.svg';
import {MONTHS_ARR} from '../../data/shared.js';


class MonthFilter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        monthNumber: new Date().getMonth() + 1,
        monthName: '',
        isDisabledNextBtn: false,
        isDisabledPrevBtn: false,
        btnNext: 'active',
        btnPrev: 'active'
      }
      console.log(this.state);
    }

  componentDidMount () {
    
    let month = MONTHS_ARR[this.state.monthNumber-1];
    this.setState({
      monthName: month
    })
  }

  handleClickOnButtonNext = () => {
    
    if (this.state.monthNumber > 10) {
      this.setState({
        isDisabledNextBtn: true,
        btnNext: 'disabled',
        monthNumber: 12,
        monthName: 'דצמבר'
      })
    }
    
    this.setState({
      btnPrev: 'active',
      isDisabledPrevBtn: false,
      monthNumber: this.state.monthNumber+1,
      monthName: MONTHS_ARR[this.state.monthNumber]
    })
    // console.log(this.state);
  }

  handleClickOnButtonPrev = () => {

    if (this.state.monthNumber < 3) {
      this.setState({
        isDisabledPrevBtn: true,
        btnPrev: 'disabled',
        monthNumber: 0,
        monthName: 'ינואר'
      })
    }
    
    this.setState({
      btnNext: 'active',
      isDisabledNextBtn: false,
      monthNumber: this.state.monthNumber-1,
      monthName: MONTHS_ARR[this.state.monthNumber-2]
    })
    // console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="c-month-filter">
        <div className="pagination-wrap">
          <button className="pagination-btn" disabled={this.state.isDisabledNextBtn} onClick={this.handleClickOnButtonNext}>
            <svg className={`month-arrow-next btn-${this.state.btnNext}`} src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
              <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                  <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
              </g>
            </svg>
            {/* <img className="month-arrow-next" src={arrowDown} /> */}
          </button>
          <p className="month-text">{this.state.monthName}</p>
          <button className="pagination-btn" disabled={this.state.isDisabledPrevBtn} onClick={this.handleClickOnButtonPrev}>
            <svg className={`month-arrow-prev btn-${this.state.btnPrev}`} src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
              <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                  <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
              </g>
            </svg>
            {/* <img className="month-arrow-prev" src={arrowDown} /> */}
          </button>
        </div>
      </div>
    )
  }
}
export default MonthFilter;