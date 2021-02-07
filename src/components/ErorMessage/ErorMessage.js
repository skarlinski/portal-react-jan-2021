import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import './errormessage.css'
// import warnnigSign from './noun_error_1156903.svg';

class ErrorMessage extends React.Component {
    constructor(props){
        super(props)
        
    }

    alertx() {
        console.log("hello");
    }
   
    render() {
        const style={color : this.props.txtColor,  backgroundColor : this.props.bgColor} 
        return(
        //    <div className="c-errormessage"> 
                <Container className="c-errormessage" style={style}>
                    <Row>
                        <Col>
                            <img src={this.props.msgIcon} />
                        </Col>
                        <Col>
                        {this.props.errMsg}
                        </Col>
                        <Col className="top-left" onClick={this.props.handleClose} >
                           
                            x
                           
                        </Col>
                    </Row>
                {/* {this.props.msg} */}
                </Container>
            // </div>
        )
    }
}

export default ErrorMessage;