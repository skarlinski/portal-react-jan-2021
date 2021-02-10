import React from 'react';
import './MultipleApproveButtons.css';

class MultipleApproveButtons extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return(
      <div className="c-multiple-approve-buttons">
        <div className="multiple-button-wrap">
          <label className="multiple-button multiple-button-checked" >
          <input className="multiple-input" type="checkbox" value="checkedall" />
        </label>
        <span className="multiple-button-label">סמן הכל</span>
        </div>
        <div className="multiple-button-wrap">
          <div className="multiple-button multiple-button-approve"></div>
        <span className="multiple-button-label">אישור מסומנים</span>
        </div>
        <div className="multiple-button-wrap">
          <div className="multiple-button multiple-button-reject"></div>
          <span className="multiple-button-label">דחיית מסומנים</span>
        </div>
      </div>
    )
  }
}
export default MultipleApproveButtons;