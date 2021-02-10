import React from 'react';
import './ApproveButton.css';

class ApproveButton extends React.Component {

  render () {
    return (
      <div className="btn-wrap">
         <span className={`btn-label label-${this.props.button.status}`}>{this.props.button.label}</span>
         <div className={`report-btn ${this.props.button.style}`} onClick={() => {this.props.handleClick(this.props.eventKey, this.props.reportid)}}>
           <div className={`btn-circle ${this.props.button.style}`}></div>
         </div>
       </div>
    )
  }
}
export default ApproveButton;