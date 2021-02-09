import React, { useState, useContext } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import './login.css'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import ActiveUserContext from '../../shared/activeUserContext'
import ErrorMessage from '../../components/ErorMessage/ErorMessage';
import logo from './appleseeds-logo.svg';
import msgIcon from './noun_error_1156903.svg';
const LoginPage = (props) => {
    const { handleLogin } = props;
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [msg, setMsg] = useState("");
    const activeUser = useContext(ActiveUserContext);

    const login = () => {
 // Change alert to text message like description by conditinal rendering 
        if(!email || !pwd)
		{
            setMsg("נא להזין פרטי משתמש");
			return;
        }
        
        const data = {email, pass: pwd};
        server(null, data, "login").then(res => {
            console.log(res);
            if (res.data.error) {
            setMsg("שם המשתמש והסיסמה שגויים");
            } else {
                handleLogin(res.data);
            }
        }, err => {
        setMsg("שגיאה בהתחברות שלרת");
             console.error(err);
        })
    }

    if (activeUser) {
        return <Redirect to='/courses' />
    }
    const handleClose = () => {
        setMsg("") ;  
        setEmail("");
        setPwd("");
    }
    

    return (


        <Container className="p-login">
            <img src={logo} className="m-btm"/>
            <Form className="p-centered">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control className="input-text m-small "  value={email} type="email" placeholder="אימייל" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control className="input-text m-btm"  value={pwd} type="password" placeholder="סיסמה" onChange={e => setPwd(e.target.value)}/>
                </Form.Group>
                <Button className="submit-button m-small" variant="light" block type="button" onClick={login}>
                    התחברות
                </Button>
                <h5>שכחתי סיסמה</h5>
            </Form>
            
            {msg ? <ErrorMessage errMsg={msg} msgIcon={msgIcon} bgColor="white" txtColor="#ffa1a1" handleClose={handleClose}/> : null }
        </Container> 
       
    );
}

export default LoginPage;