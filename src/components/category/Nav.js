import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.png'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Nav() {

    const [show, handleShow] = useState(false);
    const history = useHistory();

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
                <div className='logo'><img src={logo} alt="" onClick={() => history.push('/')} /></div>
                <input type='search' placeholder='search..' className='search' />
                <div className='avatar'> <img onClick={() => history.push('/profile')} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt="" /></div>
            </div>
        </div>
    )
}
