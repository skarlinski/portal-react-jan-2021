import React from 'react';
import './EmployeeCard.css';
import arrowDown from '../../assets/images/arrow_down.svg';
import { Accordion, Card } from 'react-bootstrap';
import ContextAwareToggle from '../ContextAwareToggle/ContextAwareToggle';
import MultipleApproveButtons from '../MultipleApproveButtons/MultipleApproveButtons';
import SelectedDeployeeReports from '../SelectedDeployeeReports/SelectedDeployeeReports';

class EmployeeCard extends React.Component {
  constructor (props) {
    super(props);
    // console.log(this.props);
    this.state = {
      allReports: '',
      approval: '',
      pending: '',
      reject: '',
      position: 'down'
    }
  }

  componentDidMount () {
    this.sumOfReports();
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.sendReports !== prevProps.sendReports) {
        this.sumOfReports();
        // const reports = this.props.sendReports
        // console.log(reports);
    }
  }

  sumOfReports = () => {
    const arrReports = this.props.sendReports.reports;
    let arrApproval = [];
    let arrPending = [];
    let arrReject = [];
    for (let i=0; i<arrReports.length; i++) {
      if (arrReports[i].approval === '1') {
        arrApproval.push(arrReports[i]);
      }
      if (arrReports[i].approval === '0') {
        arrPending.push(arrReports[i]);
      }
      if (arrReports[i].approval === '-1') {
        arrReject.push(arrReports[i]);
      }
    }
    // console.log(arrApproval);
    // console.log(arrPending);
    // console.log(arrReject);
    this.setState({
      allReports: arrReports.length,
      approval: arrApproval.length,
      pending: arrPending.length,
      reject: arrReject.length
    })
    // console.log(arrReports);
  }

  handleClick = () => {
    let css = (this.state.position === 'down' ? "up" : "down");
    this.setState({
      position: css
    })
  }

  render () {
    const reports = this.props.sendReports;
    // console.log(reports);
    // console.log(this.props.eventKey);
    return(
      <Card >
        <Card.Header  onClick={this.handleClick} className="employee-wrap" >
            <ContextAwareToggle eventKey={this.props.sendReports.userid}>
              <p className="employee-name">{reports.firstname} {reports.lastname}</p>
              <div className="numbers-wrap">
                <span className="num num-sum">{this.state.allReports}</span>
                <span className="num num-pending">{this.state.pending}</span>
                <span className="num num-approval">{this.state.approval}</span>
                <span className="num num-reject">{this.state.reject}</span>
              </div>
              <svg className={`arrow-${this.state.position}`} src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                    <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
                </g>
              </svg>
            </ContextAwareToggle>
            
        </Card.Header>
            <Accordion.Collapse eventKey={this.props.sendReports.userid}>
              <Card.Body>
                <MultipleApproveButtons />
                <SelectedDeployeeReports reports={this.props.sendReports} activeUser={this.props.activeUser}/>
              </Card.Body>
            </Accordion.Collapse>
      </Card>
    )
  }
}

export default EmployeeCard;