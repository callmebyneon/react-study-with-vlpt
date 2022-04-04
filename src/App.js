import React, { useReducer, useMemo } from 'react';

import UserList from './UserList';
import CreateUser from './CreateUser';

import reducer from './reducer';
import { initialState } from './store/initialState';


function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        // username={username}
        // email={email}
        // onChange={onChange}
        // onCreate={onCreate}
      />
      <UserList
        users={users}
        // onToggle={onToggle}
        // onRemove={onRemove}
      />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
