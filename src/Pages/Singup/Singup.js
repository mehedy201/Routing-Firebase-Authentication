import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Singup.css'
import auth from '../../firebase.init';
import SocialSingUp from '../../Sheard/SocialSingUp/SocialSingUp';


const Singup = () => {

  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  const [updateProfile, updating, profileError] = useUpdateProfile(auth);

  // use navigate in login text
  const navigate = useNavigate()
  const navigatLogin = event => {
    navigate('/login')
  }
  // get input value
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  if(user){
    console.log('user', user)
  }

  const handleSubmitButtonSingUp  = async event =>{
    event.preventDefault()
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const agree = event.target.terms.checked;
    // if(agree){
      // createUserWithEmailAndPassword(email, password);
    // }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name});
          console.log('Updated profile');
    
  }

  if(user){
    navigate('/home')
  }


    return (
        <div className="login_area">
      <div className="w-50 inside_login">
        <h2>Please Sing Up !!!!</h2>
        <p className='text-center mb-4'>Please sing up and stay with me.</p>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <input onClick={() => setAgree(!agree)} className='py-2 me-2' type="checkbox" name='terms' id='terms'/>
          {/* <label className={agree? 'py-2 text-primary': 'py-2 text-danger'} htmlFor="terms">Accepts mehedi terms and condition</label> */}
          <label className={`py-2 ${agree? 'text-primary': 'text-danger'}`} htmlFor="terms">Accepts mehedi terms and condition</label>
          <button disabled={!agree} className='btn btn-warning d-block' onClick={handleSubmitButtonSingUp} type='submit'>Sing Up</button>
        </Form>
        <p className='mt-3'>All ready have an Account <span onClick={navigatLogin} className='text-primary text-decoration-underline singup_btn'>Please Log In</span></p>
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