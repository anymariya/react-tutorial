import React from 'react';

const UserInput = (props) => {
  const style = {
    width: '40%',
    padding : '16px',
    margin: '20px auto',
    backgroundColor: 'cornflowerblue'
  }
  return (
    <div style = {style}>
        Username : <input type="text" value = {props.userName} onChange={props.changeUserName}/>
    </div>
  );
}

export default UserInput;