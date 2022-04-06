import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import History from './components/History';
import NoMatch from './components/NoMatch';

const CustomNavLink = ({ children, ...rest }) => {
  const active = {
    style: ({ isActive }) =>
      isActive
        ? { textDecoration: 'line-through', backgroundColor: 'skyblue' }
        : undefined,
    className: ({ isActive }) => (isActive ? 'active' : undefined),
  };
  return (
    <NavLink {...active} {...rest}>
      {children}
    </NavLink>
  );
};

const App = () => {
  return (
    <div className="box">
      <ul>
        <li>
          <CustomNavLink to="/">Home</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/about">About</CustomNavLink>
          <ul>
            <li>
              <CustomNavLink to="/about?detail=true">detail</CustomNavLink>
            </li>
          </ul>
        </li>
        <li>
          <CustomNavLink to="/profiles">Profile list</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/history">history ex.</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/nowhere">not found ex.</CustomNavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profiles/*" element={<Profiles />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
