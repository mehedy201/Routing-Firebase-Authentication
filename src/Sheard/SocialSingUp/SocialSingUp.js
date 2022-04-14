import React from 'react';
import './SocialSingUp.css';
import googleIcon from '../../images/google.png'
import facebookIcon from '../../images/facebook.png'
import githubIcon from '../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';



const SocialSingUp = () => {
    const navigate = useNavigate()

    // Sing In with Google
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

     // Sing In with Github 
     const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

     // Error message
    let errorElement;
    if (error || error1) {
        errorElement = <div> <p className='text-danger'>Error: {error?.message} {error1?.message}</p></div>
      }
      if(user || user1){
          navigate('/home')
      }
    // Sing In with Facebook

   
    



    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='social_icon_div'>
                {errorElement}
            <button onClick={() => signInWithGoogle()} className='social_btn d-flex align-items-center'><img className='social_icon' src={googleIcon} alt="" /><p className='m-0'>Google Sing In</p></button>
            <button  className='social_btn d-flex align-items-center'><img className='social_icon' src={facebookIcon} alt="" /><p className='m-0'>FaceBook Sing In</p></button>
            <button onClick={() => signInWithGithub()} className='social_btn d-flex align-items-center'><img className='social_icon' src={githubIcon} alt="" /><p className='m-0'>GitHub Sing In</p></button>
            </div>
        </div>
    );
};

export default SocialSingUp;