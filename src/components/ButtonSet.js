
import React from 'react';
import {Button} from 'react-bootstrap';
import './ButtonSet.css'


class ButtonSet extends React.Component {
    constructor(props){
        super(props);

        this.state={
            activeButtonId:(this.props.buttons) ? this.props.buttons[0].key : null
            // activeButtonId:(this.props.buttons && this.props.buttons[0]) ? this.props.buttons[2].key : null

            // activeButtonId: null

        }
    }
    handleClick=(statusButton)=>{
        this.setState({activeButtonId:statusButton.key});
         this.props.handleClick(statusButton)
    }
    
    render(){
        const styleActiveButton={fontWeight:"bold"}
        const buttonsList = this.props.buttons.map((button)=>{
                return(<Button className="mr-10 ml-110 bt-worker" variant="" key={button.key}
                        onClick={()=>this.handleClick(button)}
                        style ={(this.state.activeButtonId===button.key)? styleActiveButton: {}}> 
                        {button.label}
                    </Button>);
            })
        return(<div className="c-button-set">
            {buttonsList}
        </div>
        );}
}

export default ButtonSet;