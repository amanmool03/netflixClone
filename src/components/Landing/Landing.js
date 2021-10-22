import React from 'react'
import '../../styles/components/Landing/landing.scss'
import Footer from '../Home/Footer'
import Banner from './Banner'
import Nav from './Nav'



export default function Landing() {
    return (
        <div className='landing'>
            <div className='landing-container'>
                {/* <Nav /> */}
                <Banner />
                <Footer />
            </div>
        </div>
    )
}
