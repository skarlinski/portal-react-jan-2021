import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.css'

class Input extends React.Component{
    constructor(props){
        super(props);
    }
    handleChange = (inputValue) =>{
        this.props.handleChange(inputValue.target.value);
    }

    render(){
        const formLabel = (this.props.title==="" || this.props.title===null || this.props.title===undefined) ? null
                            :<Form.Label className="form-label-input">{this.props.title}</Form.Label>;
        
        return(
            <div className="c-input">
                {formLabel}
                <Form.Control className="form-control-input" type="text" placeholder={this.props.placeholder} onChange={e=>this.handleChange(e)}/>
            </div>
        );
    }
}

export default Input;