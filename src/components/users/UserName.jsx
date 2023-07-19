import React from 'react';
import "./UserName.css"

const UserName = (props) => {
    return (
        <div>
            <div className="userInfo-name">{props.name}</div>
        </div>
    );
};

export default UserName;