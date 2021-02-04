import React from 'react';
import './HoursReport.css';
import MonthFilter from '../MonthFilter/MonthFilter';
class HoursReport extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="p-hours-report">
        <MonthFilter />
      </div>
    )
  }
}
export default HoursReport;