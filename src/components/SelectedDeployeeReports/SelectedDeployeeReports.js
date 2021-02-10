import React from 'react';
import './SelectedDeployeeReports.css';
import moment from 'moment';
import 'moment-duration-format';
import ApproveButtonsSet from '../ApproveButtonsSet/ApproveButtonsSet';
import Checkbox from '../Checkbox/Checkbox';
import server from '../../shared/server.js';

class SelectedDeployeeReports extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      viewReports: [],
      selectedReports: [],
      allCheckedReports: []
    }
    // console.log(this.props);
  }

  handleSelectedReports = () => {
    this.props.getSelectedReports(this.state.selectedReports)
  }

  handleSelectedCheckboxes = (isChecked,value) => {
    // console.log(isChecked, value);
    if (isChecked === true) {
      this.state.selectedReports.push(value)
    }
    if (isChecked === false) {
      this.state.selectedReports.splice(this.state.selectedReports.indexOf(value), 1)
    }
    this.handleSelectedReports()
  }
   
  isAllChecked = () => {
    let arrReports = [];
    for (let i=0; i<this.props.reports.reports.length; i++) {
      arrReports.push(this.props.reports.reports[i].reportid)
    }
    
    if (this.props.isAllChecked === true) {
      this.setState ({
        allCheckedReports: arrReports
      })
    }
    // console.log(this.state);
  }

  componentDidMount () {
    // this.setState({
    //     allChecked: this.props.isAllChecked
    // })
    this.showReports();
    this.isAllChecked();
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.reports !== prevProps.reports) {
      this.showReports();
    }
    if (this.props.isAllChecked !== prevProps.isAllChecked) {
      this.showReports();
      this.isAllChecked();
    }
    // if (this.state.allCheckedReports !== prevState.allCheckedReports) {
    //   this.showReports();
    // }
    //  if (this.props.changeStatus !== prevProps.changeStatus) {
    //    this.showReports();
    //  }
    // console.log(this.props);
  }

  getDuration = (data) => {
    let starthour = moment([data.starthour], 'hh:mm');
    let finishhour = moment([data.finishhour], 'hh:mm');
    let hours = moment.duration(finishhour.diff(starthour, 'minutes'),
    'minutes').format('h [ש\'] m [ד\']', {
        trim: "large"
    });
    return hours;
  }

  showReports = () => {
    const reports = this.props.reports.reports;
    // console.log(reports);
    const allReports = reports.map((report, index) => {
      let hours = this.getDuration(report);

      let projectId = report.projectid;
      let courseId = report.courseid;
      const reportPerimeter = this.props.reports.reportingPerimeter[projectId];
      if( ! reportPerimeter ) {
        return null;
      }
      let courseName;
      for (let i=0; i < reportPerimeter.courses.length; i++) {
        if(reportPerimeter.courses[i].courseid === courseId) {
          courseName = reportPerimeter.courses[i].courseName
        }
        if(!courseId) {
          courseName = 'כללי';
        }
      }
      // console.log(courseName);
      let actionId = report.actionid;
      let subject;
      for (let i=0; i<reportPerimeter.subjects.length; i++) {
        if(reportPerimeter.subjects[i].reportsubjectid === actionId) {
          subject = reportPerimeter.subjects[i].subject
        }
      }
      let reportStyle;
      if (report.approval === '1') {
        reportStyle = 'approval';
      }
      if (report.approval === '0') {
        reportStyle = 'pending';
      }
      if (report.approval === '-1') {
        reportStyle = 'reject';
      }

      return (
        <div key={report.reportid}>
          <div className="report-details-header">
            <ApproveButtonsSet getEventKey={this.getEventKey} getStatus={reportStyle} getReportId={report.reportid}/>
          </div>
          <div className={`report-details ${reportStyle}`}>
            <div className="report-wrap">
              <div className="details-row">
                <Checkbox
                  label={report.reportid}
                  key={report.reportid}
                  isChecked={this.handleSelectedCheckboxes}
                  isAllChecked={this.props.isAllChecked}
                  // handleAllCkecked={this.handleAllChecked}
                />
                <span className="details-text">תאריך: {report.date}</span>
                <span className="details-text">סה''כ שעות: {hours}</span>
              </div>
              <div className="report-row">
           <div className="report-column">
            <span className="report-head">פרויקט</span>
            <span className="report-text">{reportPerimeter.projectName}</span>
           </div>
           <div className="report-column">
             <span className="report-head">מס/שם קורס</span>
             <span className="report-text">{courseName}</span>
           </div>
           <div className="report-column">
             <span className="report-head">נושא פעילות</span>
             <span className="report-text">{subject}</span>
           </div>
         </div>
            </div>
          </div>
        </div>
      )
    })
    this.setState({
      viewReports: allReports
    })
  }

  getEventKey = (indexBtn, report) => {
    let eventKey = indexBtn;
    let reportId = report
    this.handleClickOnApprovalBtn(eventKey, reportId);
  }

  // refreshPage = () => {
  // window.location.reload();
  // }

  handleClickOnApprovalBtn = (eventKey, reportId) => {
    // console.log(this.props.changeStatus);
    console.log(eventKey, reportId);
    if (eventKey===0) {
      console.log('approval');
      server(this.props.activeUser, {checkdate2: true, reportids: [reportId] || this.state.selectedReports || this.state.allCheckedReports,
      status: 1}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }
    if (eventKey===1) {
      console.log('pending');
      server(this.props.activeUser, {checkdate2: true, reportids: [reportId] || this.state.selectedReports || this.state.allCheckedReports,
      status: 0}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }
    if (eventKey===2) {
      console.log('reject');
      server(this.props.activeUser, {checkdate2: true, reportids: [reportId] || this.state.selectedReports || this.state.allCheckedReports,
      status: -1}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }
    // this.refreshPage();
    // this.handleSelectedCheckboxes();
  }

  render () {
    return (
      <div>
        {this.state.viewReports}
      </div>
    )
  }
}
export default SelectedDeployeeReports;