import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      window.location.href = '/TravelExperiences';
    } else {
      alert('Please provide both email and password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        style={{ width: '300px' }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        style={{ width: '300px' }}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
