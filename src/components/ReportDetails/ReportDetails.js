import React from 'react';
import './ReportDetails.css';

class ReportDetails extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="p-report-details">
        <div className="report-wrap">
          <div className="details-row">
            <input className="report-checkbox" type="checkbox" />
            <span className="details-text">תאריך: 21/04/21</span>
            <span className="details-text">סה''כ שעות: 9</span>
          </div>
          <div className="report-row">
            <div className="report-column">
              <span className="report-head">פרויקט</span>
              <span className="report-text">שם הפרויקט המלא</span>
            </div>
            <div className="report-column">
              <span className="report-head">מס/שם קורס</span>
              <span className="report-text">שם נושא הפעילות המלא</span>
            </div>
            <div className="report-column">
              <span className="report-head">נושא פעילות</span>
              <span className="report-text">שם הקורס המלא</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ReportDetails;