import React, { useEffect, useState } from 'react';
import './FollowersCard.css';
import { Followers } from '../../Data/FollowersData';
import User from '../User/User';

const FollowersCard = () => {

    const [persons, setPersons] = useState([]);

    const { user } = ((state) => state.AuthReducer.authData);

    useEffect(() => {
        const fetchPersons = async () => {
            const { data } = await getAllUser();
        }

        fetchPersons();
        
    }, []);
    return (
        <div className='FollowersCard'>

            <h3>People you may Know</h3>

            {Followers?.map((person, id) => (

                <User person={person} key={id} />

            ))
            }
        </div>
    )
}

export default FollowersCard