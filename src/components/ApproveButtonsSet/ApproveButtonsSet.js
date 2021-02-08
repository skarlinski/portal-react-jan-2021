import React from 'react';
import './ApproveButtonsSet.css';
import ApproveButton from '../ApproveButton/ApproveButton';

class ApproveButtonsSet extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    buttons: [
      {label: 'אשר', status: 'approval'},
      {label: 'ממתין', status: 'pending'},
      {label: 'דחוי', status: 'reject'}
    ]
  }

  render () {
    return (
      <div className="buttons-wrap">
        { this.state.buttons.map((button) => {
          return <ApproveButton button={button} />
        }) }
      </div>
    )
  }
}
export default ApproveButtonsSet;