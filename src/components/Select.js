import React from 'react';
import { Form } from 'react-bootstrap';
import './Select.css'

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedOption:this.props.optionsKey? this.props.optionsKey:null,
        }
    }
    handleSelection= (ChossenOption) =>{
        this.setState({selectedOption:ChossenOption.target.value})
        this.props.handleSelection(ChossenOption.target.value)

    }
    render(){
        const optionsOfSelect = this.props.options.map((item) =>{
            return(<option key={item.value} value={item.value}>{item.label}</option>);
        });
        return(<div className="c-select">
                <Form.Label className="label-select">{this.props.title}</Form.Label>
                <Form.Control className="select" as="select" value={this.state.selectedOption}
                onChange={this.handleSelection}>
                    {optionsOfSelect}
                </Form.Control>
            </div>
        );
    }
}

export default Select;