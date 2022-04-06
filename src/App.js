import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Users from './Users';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Users />
    </>
  );
}

export default App;
