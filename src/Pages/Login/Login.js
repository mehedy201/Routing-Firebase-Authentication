import { Button } from "bootstrap";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigat = useNavigate('')

  const handleSubmitButton  = event =>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }

  const navigatSingUp = event => {
    navigat('/singup')
  }

  return (
    <div className="login_area">
      <div className="w-50 inside_login">
        <h2>Please Log In !!!!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <Form.Control onClick={handleSubmitButton} type="submit" value="submit" />
        </Form>
        <p className='pt-3'>If don't have account? <span onClick={navigatSingUp} className="text-warning text-decoration-underline singup_link">Please SingUp</span></p>
      </div>
    </div>
  );
};

export default Login;
