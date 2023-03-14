import React from 'react';
import './Post.css';
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({data}) => {
    return (
        <div className='Post'>
            <img src={data.img} alt='postimage'/>

            <div className='postReact'>
                <img src={data.postPic1} alt='post1'/>
                <img src={data.postPic2} alt='post2'/>
                <img src={data.postPic3} alt='post3'/>
            </div>
        </div>
    )
}

export default Post