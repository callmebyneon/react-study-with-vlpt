import axios from 'axios';
import React from 'react';
// import useAsync from './hooks/useAsync';
import { useAsync } from 'react-async';

async function getUser({ id }) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function Use({ id }) {
  // const [state] = useAsync(() => getUser(id), [id]);
  // const { loading, data: user, error } = state;
  const { data: user, error, isLoading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id
  });

  if (isLoading) return <div>loading..</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!user) return null;
  
  return (
    <div>
      <h2 style={{ marginBottom: '0px' }}>{user.username}</h2>
      <i>({user.name})</i>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Website:</b> <a href={user.website} target="_black">{user.website}</a>
      </p>
    </div>
  );
}

export default Use;