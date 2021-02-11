import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isChecked: false,
    }
  }

  handleChanges = (e) => {
    this.toggleCheckboxChange();
    this.props.isChecked(e.target.checked, e.target.value)
    console.log(e.target.checked, e.target.value);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.isAllChecked !== prevProps.isAllChecked) {
      this.setState({
        isChecked: this.props.isAllChecked
      })
    }
    this.sendChecked();
  }

  toggleCheckboxChange = () => {

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked
      }
    ));
  }

  sendChecked = () => {
    if (this.state.isChecked) {
      this.props.getChecked(this.props.label)
    }
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <div className="checkbox">
        <label className="checkbox-label">
          <input className="checkbox-input"
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.handleChanges}
          />
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" style={this.state.isChecked ? { display: "block" } : { display: "none" }} className="svg-inline--fa fa-check fa-w-16 checked-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
        </label>
      </div>
    );
  }
}
export default Checkbox;