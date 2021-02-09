import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component {
  state = {
    isChecked: false,
  }

  handleChanges = (e) => {
    this.toggleCheckboxChange();
    this.props.isChecked(e.target.checked, e.target.value)
    console.log(e.target.checked, e.target.value);
  }

  toggleCheckboxChange = () => {

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
   
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.handleChanges}
          />
          {label}
        </label>
      </div>
    );
  }
}
export default Checkbox;