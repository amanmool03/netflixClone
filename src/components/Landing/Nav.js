import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.png'

export default function Nav() {

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
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__container'>
                <div className='logo'><img src={logo} alt="" /></div>

                <a href="" className='signIn-btn'>Sign In</a>

            </div>
        </div>
    )
}
