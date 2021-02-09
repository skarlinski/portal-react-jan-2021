import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import './errormessage.css'

class ErrorMessage extends React.Component {
    constructor(props){
        super(props)
        
    }
   
    render() {
        const style={color : this.props.txtColor,  backgroundColor : this.props.bgColor} 
        return(
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
                </Container>
        )
    }
}

export default ErrorMessage;