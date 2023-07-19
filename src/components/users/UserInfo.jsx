import React from 'react';
import Avatar from '../avatar/Avatar';
import UserName from './UserName';

const UserInfo = (props) => {
    return (
        <div>
            <div className="userInfo">
                <Avatar avatarUrl={props.url} name={props.name}/>
                <UserName name={props.name}/>
            </div>
        </div>
    );
};

export default UserInfo;