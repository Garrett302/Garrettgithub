import React, { useState } from 'react';
const Tab1 = () => <div className="form-container"><h2>Tab 1 Content</h2></div>;
const Tab2 = () => <div className="form-container"><h2>Tab 2 Content</h2></div>;
const Tab3 = () => <div className="form-container"><h2>Tab 3 Content</h2></div>;
const Tab4 = () => <div className="form-container"><h2>Tab 4 Content</h2></div>;
const Tab5 = () => <div className="form-container"><h2>Tab 5 Content</h2></div>;

export { Tab1, Tab2, Tab3, Tab4, Tab5 };

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('User registered:', { username, password });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
