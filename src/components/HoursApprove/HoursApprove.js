import React from 'react';
import './HoursApprove.css'
import MonthFilter from '../MonthFilter/MonthFilter';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import ReportDetails from '../ReportDetails/ReportDetails'
import server from '../../shared/server.js';
import { Accordion } from 'react-bootstrap';

class HoursApprove extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchMonth: new Date().getMonth() + 1,
      reports: []
    }
  }

  componentDidMount () {
    // console.log(this.state.searchMonth);
    this.fetchMonthData();
  }

  fetchMonthData = () => {
    server(this.props.activeUser, {month: this.state.searchMonth, year: "2020"}, 'GetAllReporters')
    .then(res => {
      // console.log(res.data);
      this.setState({
        // reports: res.data[1]
        reports: res.data
      })
    })
  }

  create 

  componentDidUpdate (prevProps, prevState) {
    if (this.state.searchMonth !== prevState.searchMonth) {
        this.fetchMonthData();
    }
  }

  callbackMonth = (month) => {
    this.setState({
      searchMonth: month
    })
    // console.log(this.state);
  }

  render() {
    const allReports = this.state.reports;
    const employeeCards = allReports.map((report, index) => {
      return <EmployeeCard key={index} eventKey={index} sendReports={report} />
    })
    // console.log(this.state.data);
    console.log(this.state.reports);
    return (
      <div className="p-hours-approve">
        <MonthFilter callbackMonth={this.callbackMonth} />
        <Accordion className="flex-column" defaultActiveKey="0">
        {employeeCards}
        </Accordion>
        <ReportDetails />
        <div className="hours-approve-footer"></div>
      </div>
    )
  }
}
export default HoursApprove;