import React from 'react';
import Card from '../ui/card/Card';
import "./CommentDate.css"


const CommentDate = (props) => {
    const commentDate = props.date
    const month = commentDate.toLocaleString("en-US", { month: "long" })
    const date = commentDate.toLocaleString("en-US", { year: "2-digit" })
    const year = commentDate.getFullYear()
    return (
        <Card className='comment-date'>
            <div>{month}</div>
            <div>{date}</div>
            <div>{year}</div>
        </Card>
    );
};

export default CommentDate;