import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Profile from './Profile';
import WithRouterSample from './WithRouterSample';


const Profiles = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // reset state of error and users
      setError(null);
      setUsers(null);
      // make loading state true
      setLoading(true);
      // get response
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  if (loading || !users) return <div>loading...</div>;
  
  return (
    <div>
      <h3>User List:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}><Link to={user.username}>{user.username}</Link></li>
        ))}
      </ul>

      {loading && <div>loading..</div>}
      {error && <div>{error.toString()}</div>}
      <Routes>
        <Route path="/" element="Please select user." />
        <Route path=":username" element={<Profile users={users} />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
}

export default Profiles;