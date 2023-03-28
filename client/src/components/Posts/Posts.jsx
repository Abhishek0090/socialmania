import React from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Post from '../Post/Post';

const Posts = () => {
    return (
        <div className='Posts'>
            {PostsData.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}

export default Posts