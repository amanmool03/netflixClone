import React from 'react'

import '../../styles/components/Home/footer.scss'
import { footer } from '../../db/db'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='site-footer'>
                <p className='footer-top'>Questions ? Contact Us.</p>
                <ul className='footer-links'>
                    {footer.map((item) => {
                        return (<li className='footer-link-item'>{item}</li>);
                    })}

                </ul>

            </div>

        </div>
    )
}
