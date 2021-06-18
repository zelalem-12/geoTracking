import React from 'react';
import './sidebar.css';
const Sidebar = () => {
  return (
    <nav class="main-menu">
      <ul>
        <li>
          <a href="http://justinfarrow.com">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">GEO Tracking</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="http://justinfarrow.com">
            <i class="fa fa-laptop fa-2x"></i>
            <span class="nav-text">Device One</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="http://justinfarrow.com">
            <i class="fa fa-list fa-2x"></i>
            <span class="nav-text">Device Two</span>
          </a>
        </li>
        <li class="has-subnav">
          <a href="http://justinfarrow.com">
            <i class="fa fa-folder-open fa-2x"></i>
            <span class="nav-text">Device Three</span>
          </a>
        </li>
      </ul>

      <ul class="logout">
        <li>
          <a href="http://justinfarrow.com">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
