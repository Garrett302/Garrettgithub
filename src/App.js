// App.js
import React from 'react';
import './App.css';

const user = {
  name: "John Doe",
  username: "@johndoe",
  profilePicture: "https://via.placeholder.com/100"
};

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post. It's just some placeholder text for now.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post. It's just some placeholder text for now.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post. It's just some placeholder text for now.",
  }
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Social Media</h1>
      </header>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#profile">Profile</a>
        <a href="#messages">Messages</a>
        <a href="#settings">Settings</a>
      </nav>
      <div className="profile">
        <img src={user.profilePicture} alt="Profile" />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.username}</p>
        </div>
      </div>
      <div className="feed">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
