import React, { useState } from 'react';
import axios from '../services/api';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await axios.post('/auth/signup', { email, password });
      alert('Sign-up successful!');
    } catch (err) {
      alert('Sign-up failed.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;

