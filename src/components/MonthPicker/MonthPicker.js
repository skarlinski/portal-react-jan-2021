import React from 'react';
import './MonthPicker.css';
import arrowDown from '../../assets/images/arrow_down.svg';

class MonthPicker extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="c-month-picker">
        <img className="month-arrow-prev" src={arrowDown} />
        <p className="month-text">יולי</p>
        <img className="month-arrow-next" src={arrowDown} />
      </div>
    )
  }
}
export default MonthPicker;