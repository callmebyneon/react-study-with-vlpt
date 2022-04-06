import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Users from './Users';
import { UsersProvider } from './UsersContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <UsersProvider>
      <GlobalStyle />
      <Users />
    </UsersProvider>
  );
}

export default App;
