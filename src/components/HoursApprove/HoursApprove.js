import React from 'react';
import './HoursApprove.css'
import MonthFilter from '../MonthFilter/MonthFilter';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import server from '../../shared/server.js';

class HoursApprove extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchMonth: new Date().getMonth() + 1,
      // data: [],
      reports: []
    }
  }

  componentDidMount () {
    // console.log(this.state.searchMonth);
    this.fetchMonthData();
    // this.fetchReportsData();
  }

  fetchMonthData = () => {
    server(this.props.activeUser, {month: this.state.searchMonth, year: "2020"}, 'GetAllReporters')
    .then(res => {
      // console.log(res.data);
      this.setState({
        reports: res.data[1]
      })
      // console.log(this.state);
    })
  }

  // fetchReportsData = () => {
  //   server(this.props.activeUser, {month: this.state.searchMonth, year: "2020"}, 'GetAllReporters')
  //   .then(res => {
  //     // console.log(res.data);
  //     this.setState({
  //       reports: res.data[1].reports
  //     })
  //     // console.log(this.state);
  //   })
  // }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.searchMonth !== prevState.searchMonth) {
        this.fetchMonthData();
        this.fetchReportsData();
    }
  }

  callbackMonth = (month) => {
    this.setState({
      searchMonth: month
    })
    // console.log(this.state);
  }

  render() {
    // console.log(this.state.data);
    console.log(this.state.reports);
    return (
      <div className="p-hours-approve">
        <MonthFilter callbackMonth={this.callbackMonth} />
        <EmployeeCard sendReports={this.state.reports} num={3}/>
        <div></div>
      </div>
    )
  }
}
export default HoursApprove;