import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../Sheard/Loading/Loading";
import SocialSingUp from "../../Sheard/SocialSingUp/SocialSingUp";
import "./Login.css";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  let from = location.state?.from?.pathname || '/'

  // Sing In with email and password
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  // Reset Password
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async() => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      alert('Sent email');
  }


  const handleSubmitButtonLogIn  = event =>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }
  
  
  const navigat = useNavigate('')
  const navigatSingUp = event => {
    navigat('/singup')
  }

  if(user){
    navigat(from, {replace: true});
  }
  let errorElement;
  if(error){
    errorElement = <p className="text-danger my-3">{error.message}</p>
  }
  if(loading){
    return <Loading></Loading>
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
          <Form.Control onClick={handleSubmitButtonLogIn} type="submit" value="Log In" />
        </Form>
        {
          errorElement
        }
        <p className='pt-3 mb-1'>If don't have account? <span onClick={navigatSingUp} className="text-primary text-decoration-underline singup_link">Please SingUp</span></p>
        <p className='pt-0'>If forget Password <span onClick={resetPassword} className="text-primary text-decoration-underline singup_link">Reset Password</span></p>
          <SocialSingUp></SocialSingUp>
      </div>
    </div>
  );
};

export default Login;
