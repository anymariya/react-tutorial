import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className = "username-card">
        <p>You have chosen the username : {props.userName}</p>
        <p>Is this right?</p>
    </div>
  );
}

export default UserOutput;