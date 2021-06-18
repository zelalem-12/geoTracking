import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
const Header = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };
  return (
    <div class="header">
      <a href="#home" className="active logo">
        GEO Tracking
      </a>
      <button className="logout" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
