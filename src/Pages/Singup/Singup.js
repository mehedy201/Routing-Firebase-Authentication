import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Singup.css'
import auth from '../../firebase.init';
import SocialSingUp from '../../Sheard/SocialSingUp/SocialSingUp';


const Singup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);


  // use navigate in login text
  const navigate = useNavigate()
  const navigatLogin = event => {
    navigate('/login')
  }
  // get input value
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmitButtonSingUp  = event =>{
    event.preventDefault()
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
  }

  if(user){
    navigate('/home')
  }





    return (
        <div className="login_area">
      <div className="w-50 inside_login">
        <h2>Please Sing Up !!!!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Control onClick={handleSubmitButtonSingUp} type="submit" value="submit" />
        </Form>
        <p className='mt-3'>All ready have an Account <span onClick={navigatLogin} className='text-warning text-decoration-underline singup_btn'>Please Log In</span></p>
        <div className='d-flex justify-content-center align-items-center'>
          <span className='or_line'></span>
          <p className='m-0 px-2 fw-bold'>Or</p>
          <span className='or_line'></span>
        </div>
        <SocialSingUp></SocialSingUp>
      </div>
    </div>
    );
};

export default Singup;