// import React from 'react';
// import './ApproveButton.css';

// class ApproveButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       colorCode: ''
//     }
//   }

//   componentDidMount () {
//     const reports = this.props.sendReports;
//     console.log(reports);
//     for (let i=0; i<reports.reports.length; i++) {
//       if (reports.reports[i].approval === '1') {
//         this.setState({
//           colorCode: '#a1d47f'
//         })
//       }
//       if (reports.reports[i].approval === '0') {
//         this.setState({
//           colorCode: '#ffd300'
//         })
//       }
//       if (reports.reports[i].approval === '-1') {
//         this.setState({
//           colorCode: '#ffa1a1'
//         })
//       }
//     }
//   }

//   render () {
//     console.log(this.state.colorCode);
//     return (
//       <div className="report-details-header">
//         <div className="btn-wrap">
//         <span className="btn-label" style={{ color: this.state.colorCode }}>אשר</span>
//         <div className="report-btn" type="button">
//           <div className="btn-circle"></div>
//         </div>
//       </div>
//       <div className="btn-wrap">
//         <span className="btn-label">ממתין</span>
//         <div className="report-btn" type="button">
//           <div className="btn-circle"></div>
//         </div>
//       </div>
//       <div className="btn-wrap">
//         <span className="btn-label">דחה</span>
//         <div className="report-btn" type="button">
//           <div className="btn-circle"></div>
//         </div>
//       </div>
//       </div>
//     )
//   }
// }
// export default ApproveButton;