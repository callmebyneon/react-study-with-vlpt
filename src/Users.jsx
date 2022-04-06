import React, { useState } from 'react';

import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";
import User from "./User";

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  
  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
    setUserId(null);
  }

  if (loading) return <div>loading..</div>;
  if (error) return <div>{error ? error.toString() : '에러가 발생했습니다'}</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;
  
  return (
    <>
      <ul>
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>리스트 다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;