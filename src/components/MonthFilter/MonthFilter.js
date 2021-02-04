import React from 'react';
import './MonthFilter.css';
import arrowDown from '../../assets/images/arrow_down.svg';

class MonthFilter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        monthNumber: new Date().getMonth() + 1,
        monthName: '',
        isDisabledNextBtn: false,
        isDisabledPrevBtn: false,
      }
      console.log(this.state);
    }

  componentDidMount () {
    const arrMonth = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']
    let month = arrMonth[this.state.monthNumber-1];
    this.setState({
      monthName: month
    })
  }

  handleClickOnButtonNext = () => {
    const arrMonth = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']

    if (this.state.monthNumber > 10) {
      this.setState({
        isDisabledNextBtn: true,
        monthNumber: 12,
        monthName: 'דצמבר'
      })
    }
    
    this.setState({
      isDisabledPrevBtn: false,
      monthNumber: this.state.monthNumber+1,
      monthName: arrMonth[this.state.monthNumber]
    })
    // console.log(this.state);
  }

  handleClickOnButtonPrev = () => {
    const arrMonth = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']

    if (this.state.monthNumber < 3) {
      this.setState({
        isDisabledPrevBtn: true,
        monthNumber: 0,
        monthName: 'ינואר'
      })
    }
    
    this.setState({
      isDisabledNextBtn: false,
      monthNumber: this.state.monthNumber-1,
      monthName: arrMonth[this.state.monthNumber-2]
    })
    // console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div className="c-month-filter">
        <button disabled={this.state.isDisabledNextBtn} onClick={this.handleClickOnButtonNext}>
          <img className="month-arrow-next" src={arrowDown} />
        </button>
        <p className="month-text">{this.state.monthName}</p>
        <button disabled={this.state.isDisabledPrevBtn} onClick={this.handleClickOnButtonPrev}>
          <img className="month-arrow-prev" src={arrowDown} />
        </button>
      </div>
    )
  }
}
export default MonthFilter;