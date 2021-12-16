import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({username,caption,imageurl}) {
    return (
        <div className="post">
             {/*header->avatar->username */}
            <div className='post_Header'>
                <Avatar className="post_Avatar"
                alt="MarinkieT"
                src="post (5).png"/>
                 <h3>{username}</h3>
            </div>
            {/*image*/}
            <img className ="post_Image" alt=""src={imageurl} ></img>
            {/*username + caption*/}
            <h4 className='post_Text'><strong>{username}</strong>{caption}</h4>
        </div>
    )
}

export default Post
