import React, { useEffect } from 'react';
import './Posts.css';
import { PostsData } from '../../Data/PostsData';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from '../../loading/Loading';
import Post from '../Post/Post';
import { getTimelinePosts } from '../../redux/actions/PostActions';

const Posts = () => {

    const params = useParams()
 
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.AuthReducer.authData);

    let { posts, loading } = useSelector((state) => state.PostReducer);

    useEffect(() => {
         dispatch(getTimelinePosts(user._id));
    }, []);

    if(!posts) return 'No Posts';
    if(params.id) posts = posts.filter((post)=> post.userId===params.id)


    return (
        <div className='Posts'>
            {loading ? <Loading/> : posts.map((post, id) => {
                return <Post data={post} id={id} />
            })}
        </div>
    )
}

export default Posts