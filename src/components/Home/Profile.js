import React from 'react'
import '../../styles/components/Home/profile.scss'
import Nav from './Nav'
import avatar from '../../images/avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/counter/userSlice'
import { auth } from '../firebase'

export default function Profile() {

    const user = useSelector(selectUser)
    return (
        <div className='profile'>
            <Nav />
            <div className='profile_content'>
                <h1>Edit Profile</h1>
                <div className='profile_info'>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt="" />
                    <div className="profile_details">
                        <h2>{user.email}</h2>
                        <div className='profile_plans'>
                            <button onClick={() => auth.signOut()} className='profile_signOut'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
