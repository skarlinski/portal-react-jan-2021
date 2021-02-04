import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './errormessage.css'
import warnnigSign from './noun_error_1156903.svg';

class ErrorMessage extends React.Component {
    constructor(props){
        super(props)
    }

    alertx() {
        console.log("hello");
    }
    render() {
        return(
        //    <div className="c-errormessage"> 
                <Container className="c-errormessage">
                    <Row>
                        <Col>
                            <img src={warnnigSign} />
                        </Col>
                        <Col>
                        {this.props.msg}
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