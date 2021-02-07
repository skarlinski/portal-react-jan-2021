import React from 'react';
import { Form } from 'react-bootstrap';
import './Input.css'

class Input extends React.Component{

    render(){
        const formLabel = !this.props.title ? null
                            :<Form.Label className="form-label-input">{this.props.title}</Form.Label>;
        
        return(
            <div className="c-input">
                {formLabel}
                <Form.Control className="form-control-input" type="text" value={this.props.value} placeholder={this.props.placeholder} 
                              onChange={(e)=>this.props.handleChange(e.target.value)}/>
            </div>
        );
    }
}

export default Input;