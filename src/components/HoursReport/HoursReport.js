import React from 'react';
import './HoursReport.css';
import MonthFilter from '../MonthFilter/MonthFilter';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import server from '../../shared/server.js';

class HoursReport extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchMonth: new Date().getMonth() + 1
    }
  }

  componentDidMount () {
    console.log(this.state.searchMonth);
    this.fetchMonthData();
  }

  fetchMonthData = () => {
    server(this.props.activeUser, {month: this.state.searchMonth, year: "2020"}, 'GetAllReporters')
    .then(res => {
      console.log(res);
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.searchMonth !== prevState.searchMonth) {
        this.fetchMonthData();
    }
  }

  callbackMonth = (month) => {
    this.setState({
      searchMonth: month
    })
    console.log(this.state);
  }

  render() {
    return (
      <div className="p-hours-report">
        <MonthFilter callbackMonth={this.callbackMonth} />
        <EmployeeCard />
        <div></div>
      </div>
    )
  }
}
export default HoursReport;