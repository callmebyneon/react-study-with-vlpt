import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
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

  if (loading) return <div>loading..</div>;
  if (error) return <div>{error.toString()}</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;