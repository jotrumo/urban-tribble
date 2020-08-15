import React from 'react';

var UserLogin = (props) => {
  console.log("UL", props)
  return(
    <div>
      <form onSubmit={props.handleLogin}>
        <label>username<input onChange={props.handleUser}></input></label>
        <label>password<input onChange={props.handlePass}></input></label>
        <button>submit</button>
      </form>
      <div>create account</div>
    </div>
  )
}

export default UserLogin;