import React from 'react';
import './MultipleApproveButtons.css';
import server from '../../shared/server.js';

class MultipleApproveButtons extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isChecked: false
    }
    // console.log(this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    if(this.state.isChecked !== prevState.isChecked) {
      this.props.callbackAllChecked(this.state.isChecked); 
    }
   }

  handleAllChecked = () => {
    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
      })
    )
    // this.props.callbackAllChecked(this.state.isChecked)  
  }

  // handleClickOnAllApproveButton = (e) => {
  //   console.log(e.target.attributes.dataName.value);
  //   this.props.handleSendAll(e.target.attributes.dataName.value);
  // }

  handleClickOnApproveSelected = (e) => {
      server(this.props.activeUser, {checkdate2: true, reportids: this.props.sendSelectedReports,
      status: 1}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
  }

  handleClickOnRejectSelected = (e) => {
      server(this.props.activeUser, {checkdate2: true, reportids: this.props.sendSelectedReports,
      status: -1}, 'SetReportApproval')
      .then(res => {
        console.log(res);
      })
    }

  render () {
    return(
      <div className="c-multiple-approve-buttons">
        <div className="multiple-button-wrap">
          <label className="multiple-button multiple-button-checked" >
          <input className="multiple-input" type="checkbox" value="checkedall" onClick={this.handleAllChecked} />
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" style={this.state.isChecked ? { display: "block" } : { display: "none" }} className="svg-inline--fa fa-check fa-w-16 checked-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        </label>
        <span className="multiple-button-label">סמן הכל</span>
        </div>
        <div className="multiple-button-wrap">
          <div className="multiple-button multiple-button-approve" onClick={this.handleClickOnApproveSelected} ></div>
        <span className="multiple-button-label">אישור מסומנים</span>
        </div>
        <div className="multiple-button-wrap">
          <div className="multiple-button multiple-button-reject" onClick={this.handleClickOnRejectSelected} ></div>
          <span className="multiple-button-label">דחיית מסומנים</span>
        </div>
      </div>
    )
  }
}
export default MultipleApproveButtons;