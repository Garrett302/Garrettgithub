// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Universal Saladtossers Collective</h1>
      </header>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#messages">Messages</a>
        <a href="#settings">Settings</a>
        <a href="#signin.js">Sign In</a>
      </nav>
      <div className="profile">
        <img src="https://i.redd.it/m2g2a7xyvh9d1.png" alt="Profile" />
        <div className="profile-info">
          <h2>Bryan Griffin</h2>
          <p>@Cptstabbin420</p>
        </div>
      </div>
      <div className="feed">
        <div className="post">
          <h3>@Cptstabbin</h3>
          <p>In need of a good rimming 🤪 </p>
        </div>
        <div className="post">
          <h3>@Archibald_meatpants</h3>
          <p>😏</p>
        </div>
      </div>
    </div>
  );
}

export default App;


