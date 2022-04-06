import React, { useEffect } from 'react';
import { useUsersState, useUsersDispatch, getUser } from './UsersContext';

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  
  const { data: user, loading, error } = state.user;

  if (loading) return <div>loading..</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!user) return null;
  
  return (
    <div>
      <h2 style={{ marginBottom: '0px' }}>{user.username}</h2>
      <i>({user.name})</i>
      <p>
        <b>Email:</b> {user.email}
        <br />
        <b>Website:</b> <a href={user.website} target="_black">{user.website}</a>
      </p>
    </div>
  );
}

export default User;