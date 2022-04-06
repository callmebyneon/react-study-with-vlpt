import React, { useState } from 'react';
import axios from 'axios';
// import useAsync from './hooks/useAsync';
import { useAsync } from 'react-async';
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
  // const [state, refetch] = useAsync(getUsers, [], true);
  // const { loading, data: users, error } = state;
  
  const { data: users, error, isLoading, run } = useAsync({
    deferFn: getUsers
  });
  //* promiseFn vs deferFn :: https://docs.react-async.com/api/options#promisefn

  if (isLoading) return <div>loading..</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!users) return <button onClick={run}>불러오기</button>;

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
      <button onClick={run}>리스트 다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;