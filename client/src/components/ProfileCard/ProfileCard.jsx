import React from 'react'
import Cover from '../../img/coverx.jpg'
import Profile from '../../img/profileimgx.png'
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt="coverimg" />
            <img src={Profile} alt="profileimg" />
        </div>
    </div>
  )
}

export default ProfileCard