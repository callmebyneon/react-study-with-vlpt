import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <div className="box">
      <CounterContainer />
      <hr />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default App;
