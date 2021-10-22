import React, { useRef } from 'react'
import '../../styles/components/Login/login.scss'
import { auth } from '../firebase';


export default function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        })
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        })
    }


    return (
        <div className='login'>
            <form action="" className='loginForm'>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email or phone number' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button type='submit' onClick={signIn}>Sign In</button>
                <div className="rememberMe">
                    <input type="checkbox" className='checkbox' />
                    <p>Need help?</p>
                </div>

                <h4><span className='signup-gray'>New to netflix?</span> <span className='signup-link' onClick={register}>Sign up now.</span></h4>

                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>

            </form>
        </div>
    )
}
