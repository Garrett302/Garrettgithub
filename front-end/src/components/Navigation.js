
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/tab1">Tab 1</Link></li>
      <li><Link to="/tab2">Tab 2</Link></li>
      <li><Link to="/tab3">Tab 3</Link></li>
      <li><Link to="/tab4">Tab 4</Link></li>
      <li><Link to="/tab5">Tab 5</Link></li>
      <li><Link to="/register">Register</Link></li>
    </ul>
  </nav>
);

export default Navigation;
