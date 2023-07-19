import React from 'react';
import UserInfo from '../users/UserInfo';
import CommentDate from '../date/CommentDate';
import "./Comment.css"

const Comment = (props) => {
    console.log(props.data);
    return (
       <div>
         <div className="comment">
            <UserInfo url={props.data.avatarUrl}
                      name={props.data.userName}
                />
            <div className="comment-text">{props.data.commentText}</div>
            <CommentDate date={props.data.commentDate}/>
        </div>
       </div>
    );
};

export default Comment;