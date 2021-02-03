import React from 'react';
import './HoursReport.css';
import MonthPicker from '../MonthPicker/MonthPicker';
class HoursReport extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="p-hours-report">
        <MonthPicker />
      </div>
    )
  }
}
export default HoursReport;