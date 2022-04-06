import React from 'react';
import { useParams } from "react-router-dom";


const Profile = ({ users }) => {
  const { username } = useParams();
  const [user] = users.filter(user => user.username === username);

  return (
    <div>
      <hr />
      <h3>{username}({user.name})</h3>
      <p>
        <b>Website: </b> {user.website}
        <br />
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
}

export default Profile;