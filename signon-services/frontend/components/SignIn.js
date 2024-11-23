import React, { useState } from 'react';
import axios from '../services/api';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/auth/signin', { email, password });
      alert('Logged in! Token: ' + response.data.token);
    } catch (err) {
      alert('Sign-in failed.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;

