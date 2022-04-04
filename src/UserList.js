import React, { /* useEffect */ } from 'react';

const User = React.memo(({ user, onRemove, onToggle }) => {
  /* useEffect(() => {
    console.log(user);
  }); */
  /* useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user가 바뀌기 전..');
      console.log(user);
    } //cleanup function
  }, [user] //deps: 의존값이 들어있는 배열
  ); */
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
});

function UserList ({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  )
}

export default React.memo(UserList);