import React from 'react'
import Cover from '../../img/coverbruh.jpg'
import Profile from '../../img/abhi.jpg'
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="coverimg" />
        <img src={Profile} alt="profileimg" />
      </div>

      <div className='ProfileName'>
        <span>Abhishek Pal</span>
        <span>Jr Software Engineer</span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>6969</span>
            <span>Followings</span>
          </div>
          <div className='vl'></div>
          <div className='follow'>
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>
        My Profile
      </span>
    </div>
  )
}

export default ProfileCard