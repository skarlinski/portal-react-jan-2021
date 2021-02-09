import React from 'react';
import './ApproveButtonsSet.css';
import ApproveButton from '../ApproveButton/ApproveButton';

class ApproveButtonsSet extends React.Component {
  constructor (props) {
    super(props);
    // console.log(this.props);
    this.state = {
      buttons: [
      {label: 'אשר', status: 'approval', style: (this.props.getStatus === 'approval' ? 'approval' : '')},
      {label: 'ממתין', status: 'pending', style: (this.props.getStatus === 'pending' ? 'pending' : '')},
      {label: 'דחוי', status: 'reject', style: (this.props.getStatus === 'reject' ? 'reject' : '')}
      ]
    }
  }

  handleOnClick = (ind) => {
    console.log(ind);
    this.props.getEventKey(ind);
    
  }

  render () {
    return (
      <div className="buttons-wrap">
        { this.state.buttons.map((button, index) => {
          return <ApproveButton key={index+button.status} button={button} eventKey={index} handleClick={this.handleOnClick} reportid={this.props.getReportId}/>
        }) }
      </div>
    )
  }
}
export default ApproveButtonsSet;