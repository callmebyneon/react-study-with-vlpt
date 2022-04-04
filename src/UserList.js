import React, { useContext /* useEffect */ } from 'react';
import { UserDispatch } from './App';

import { TOGGLE_USER, REMOVE_USER } from './store/actions';

const User = React.memo(({ user }) => {
  const dispatch = useContext(UserDispatch);
  
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => {
          dispatch({ type: TOGGLE_USER, id: user.id })
        }}
      >
      &nbsp;<span>{user.username}</span>
      </b>
      <span>({user.email})</span>
      <button onClick={() => {
        dispatch({ type: REMOVE_USER, id: user.id })
      }}>삭제</button>
    </div>
  )
});

function UserList ({ users }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
        />
      ))}
    </div>
  )
}

export default React.memo(UserList);