import React from 'react';
import './SelectedDeployeeReports.css';
import moment from 'moment';
import 'moment-duration-format';
import ApproveButton from '../ApproveButton/ApproveButton';
import server from '../../shared/server.js';

class SelectedDeployeeReports extends React.Component {
  constructor (props) {
    super (props);
    console.log(this.props);
    this.state = {
      viewReports: [],
      isActiveApprove: '',
      isActivePending: '',
      isActiveReject: ''
    }
  }

  componentDidMount () {
    const reports = this.props.reports.reports;
    console.log(reports);

    const allReports = reports.map((report, index) => {
      let starthour = moment([report.starthour], 'hh:mm');
      let finishhour = moment([report.finishhour], 'hh:mm');
      let hours = moment.duration(finishhour.diff(starthour, 'minutes'),
      'minutes').format('h [ש\'] m [ד\']', {
         trim: "large"
      });
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
      console.log(courseName);
      let actionId = report.actionid;
      let subject;
      for (let i=0; i<reportPerimeter.subjects.length; i++) {
        if(reportPerimeter.subjects[i].reportsubjectid === actionId) {
          subject = reportPerimeter.subjects[i].subject
        }
      }
      let reportStyle;
      let isActiveApproval;
      let isActivePending;
      let isActiveReject;

      if (report.approval === '1') {
        reportStyle = 'approval';
        
          isActiveApproval = 'approval';
          isActivePending = '';
          isActiveReject = '';
        
      }
      if (report.approval === '0') {
        reportStyle = 'pending';
        
          isActiveApproval = '';
          isActivePending = 'pending';
          isActiveReject = '';
        
      }
      if (report.approval === '-1') {
        reportStyle = 'reject';
        
          isActiveApproval = '';
          isActivePending = '';
          isActiveReject = 'reject';
        
      }

      return (
        <div key={index}>
          {/* <ApproveButton sendReports={this.props.reports}/> */}
          <div className="report-details-header">
            <div className="buttons-wrap">
              <div className="btn-wrap">
                <span className="btn-label approval-label">אשר</span>
                <div className={`report-btn btn-approval ${isActiveApproval}`} onClick={this.handleClickOnApprovalBtn} >
                  <div className={`btn-circle btn-approval ${isActiveApproval}`}></div>
                </div>
              </div>
              <div className="btn-wrap">
                <span className="btn-label pending-label">ממתין</span>
                <div className={`report-btn btn-pending ${isActivePending}`} onClick={this.handleClickOnApprovalBtn}>
                  <div className={`btn-circle btn-pending ${isActivePending}`}></div>
                </div>
              </div>
              <div className="btn-wrap">
                <span className="btn-label reject-label">דחה</span>
                <div className={`report-btn btn-reject ${isActiveReject}`} onClick={this.handleClickOnApprovalBtn}>
                  <div className={`btn-circle btn-reject ${isActiveReject}`}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={`report-details ${reportStyle}`}>
            <div className="report-wrap">
              <div className="details-row">
                <input className="report-checkbox" type="checkbox" />
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

  handleClickOnApprovalBtn = (e) => {
    console.log(e);
    if (e.target.className === "btn-circle btn-approval ") {
      console.log('approval');
      server(this.props.activeUser, {checkdate2: true, reportids: ["81735"],
      status: 1}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }
    if (e.target.className === "btn-circle btn-pending ") {
      console.log('pending');
      server(this.props.activeUser, {checkdate2: true, reportids: ["81735"],
      status: 0}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }
    if (e.target.className === "btn-circle btn-reject ") {
      console.log('reject');
      server(this.props.activeUser, {checkdate2: true, reportids: ["81735"],
      status: -1}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }
  }

  render () {

    const reports = this.props.reports.reports;
    
    // const allReports = reports.map((report, index) => {
    //   let starthour = moment([report.starthour], 'hh:mm');
    //   let finishhour = moment([report.finishhour], 'hh:mm');
    //   let hours = moment.duration(finishhour.diff(starthour, 'minutes'),
    //   'minutes').format('h [ש\'] m [ד\']', {
    //      trim: "large"
    //   });
    //   let projectId = report.projectid;
    //   let courseId = report.courseid;
    //   const reportPerimeter = this.props.reports.reportingPerimeter[projectId];
    //   if( ! reportPerimeter ) {
    //     return null;
    //   }
    //   let courseName;
    //   for (let i=0; i < reportPerimeter.courses.length; i++) {
    //     if(reportPerimeter.courses[i].courseid === courseId) {
    //       courseName = reportPerimeter.courses[i].courseName
    //     }
    //     if(!courseId) {
    //       courseName = 'כללי';
    //     }
    //   }
    //   console.log(courseName);
    //   let actionId = report.actionid;
    //   let subject;
    //   for (let i=0; i<reportPerimeter.subjects.length; i++) {
    //     if(reportPerimeter.subjects[i].reportsubjectid === actionId) {
    //       subject = reportPerimeter.subjects[i].subject
    //     }
    //   }
    //   let reportStyle;
    //   if (report.approval === '1') {
    //     reportStyle = 'approval'
    //   }
    //   if (report.approval === '0') {
    //     reportStyle = 'pending'
    //   }
    //   if (report.approval === '-1') {
    //     reportStyle = 'reject';
    //   }
    //   console.log(reportStyle);

    //   return (
    //     <div key={index}>
    //       <div className="report-details-header">
    //         <div className="buttons-wrap">
    //           <div className="btn-wrap">
    //             <span className="btn-label">אשר</span>
    //             <div className="report-btn" type="button">
    //               <div className="btn-circle"></div>
    //             </div>
    //           </div>
    //           <div className="btn-wrap">
    //             <span className="btn-label">ממתין</span>
    //             <div className="report-btn" type="button">
    //               <div className="btn-circle"></div>
    //             </div>
    //           </div>
    //           <div className="btn-wrap">
    //             <span className="btn-label">דחה</span>
    //             <div className="report-btn" type="button">
    //               <div className="btn-circle"></div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={`report-details ${reportStyle}`}>
    //         <div className="report-wrap">
    //           <div className="details-row">
    //             <input className="report-checkbox" type="checkbox" />
    //             <span className="details-text">תאריך: {report.date}</span>
    //             <span className="details-text">סה''כ שעות: {hours}</span>
    //           </div>
    //           <div className="report-row">
    //        <div className="report-column">
    //         <span className="report-head">פרויקט</span>
    //         <span className="report-text">{reportPerimeter.projectName}</span>
    //        </div>
    //        <div className="report-column">
    //          <span className="report-head">מס/שם קורס</span>
    //          <span className="report-text">{courseName}</span>
    //        </div>
    //        <div className="report-column">
    //          <span className="report-head">נושא פעילות</span>
    //          <span className="report-text">{subject}</span>
    //        </div>
    //      </div>
    //         </div>
    //       </div>
    //     </div>
    //   )
    // })
    
    return (
      <div>
        {/* {allReports} */}
        {this.state.viewReports}
      </div>
    )
  }
}
export default SelectedDeployeeReports;