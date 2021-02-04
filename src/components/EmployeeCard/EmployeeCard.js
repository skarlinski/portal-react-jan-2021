import React from 'react';
import './EmployeeCard.css';
import arrowDown from '../../assets/images/arrow_down.svg';


class EmployeeCard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div className="c-employee-card">
        <div className="employee-wrap">
          <p className="employee-name">שם העובד 01</p>
            <div className="numbers-wrap">
              <num className="num num-sum">150</num>
              <num className="num num-pending">50</num>
              <num className="num num-approval">50</num>
              <num className="num num-reject">50</num>
            </div>
          <svg className="arrow-down" src={arrowDown} xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
              <g id="arrow_down" transform="rotate(90 94.572 -65.43)">
                  <path id="chevron" d="M8 10V2H0V0h10v10z" transform="rotate(45 65.429 209.173)"/>
              </g>
            </svg>
        </div>
      </div>
    )
  }
}

export default EmployeeCard;