import React from 'react';
import './HoursApprove.css'
import MonthFilter from '../MonthFilter/MonthFilter';
import YearFilter from '../YearFilter/YearFilter';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import server from '../../shared/server.js';
import { Accordion } from 'react-bootstrap';

class HoursApprove extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchMonth: new Date().getMonth(),
      searchYear: new Date().getFullYear(),
      reports: []
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData = () => { 
    server(this.props.activeUser, {month: this.state.searchMonth+1, year: this.state.searchYear}, 'GetAllReporters')
    .then(res => {
      console.log(res.data);
      this.setState({
        // reports: res.data[1]
        reports: res.data
      })
    })
  } 

  componentDidUpdate (prevProps, prevState) {
    if (this.state.searchMonth !== prevState.searchMonth || this.state.searchYear !== prevState.searchYear) {
      // TODO: cancel the previous ajax requests
        this.fetchData();
    }
  }

  callbackMonth = (month) => {
    this.setState({
      searchMonth: month
    })
    // console.log(this.state);
  }

  callbackYear = (year) => {
    this.setState({
      searchYear: year
    })
    // console.log(this.state);
  }

  updateReports = () => {
        server(this.props.activeUser, {month: this.state.searchMonth+1, year: this.state.searchYear}, 'GetAllReporters')
    .then(res => {
      console.log(res.data);
      this.setState({
        // reports: res.data[1]
        reports: res.data
      })
    })

  }

  render() {
    const allReports = this.state.reports;
    if (!allReports) {
      return null
    }
    const employeeCards = allReports.map((report, index) => { // TODO: protect from no results case
      return <EmployeeCard key={index} eventKey={index} sendReports={report} activeUser={this.props.activeUser} updateReports={this.updateReports} />
    })
    // console.log(this.state.data);
    // console.log(this.state.reports);
    return (
      <div className="p-hours-approve">
        <div className="hours-approve-filter">
          <MonthFilter callbackMonth={this.callbackMonth} />
          <YearFilter callbackYear={this.callbackYear} />
        </div>
        <Accordion className="flex-column">
        {employeeCards}
        </Accordion>
        <div className="hours-approve-footer"></div>
      </div>
    )
  }
}
export default HoursApprove;