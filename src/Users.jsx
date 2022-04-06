import React, { useState } from 'react';
import axios from 'axios';
import useAsync from './hooks/useAsync';
import User from './User';

async function getUsers () {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response.data)
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state;

  if (loading) return <div>loading..</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

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
      <button onClick={refetch}>리스트 다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;