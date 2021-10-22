import React, { useEffect, useState } from 'react'

import '../../styles/components/Landing/landingBanner.scss'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.png'
import Login from '../Login/Login';

export default function Banner() {


    const [signIn, setSignIn] = useState(false);

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, [])



    return (
        <div>
            <div className={`nav ${show && 'nav__black'}`}>
                <div className='nav__container'>
                    <div className='logo'><img src={logo} alt="" /></div>

                    <div className='signIn-btn' onClick={() => setSignIn(true)}>Sign In</div>

                </div>
            </div>
            <div className='banner'>
                <div className='banner-content'>

                    {signIn ? <Login /> :
                        <div>
                            <h1 className='title'>Unlimited movies, TV shows, and more.</h1>
                            <h2 className='subtitle'>Watch anywhere. Cancel anytime.</h2>
                            <h3 className='disclaimer'>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <div className='banner-input'>
                                <form className='bannerForm'>
                                    <input type="email" placeholder='Email Address' />
                                    <button className='input-btn' onClick={() => setSignIn(true)}>GET STARTED <i class="fas fa-angle-right"></i></button>
                                </form>
                            </div>
                        </div>

                    }


                </div>
                <div className='banner-gradient'></div>
            </div>
        </div>
    )
}
