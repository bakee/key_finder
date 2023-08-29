import React, { FC, useState } from 'react';
import { login } from '../../api/user';

interface LoginProps { }

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    // Here you can implement your registration logic
    console.log('Login data:', { email, password });
    try {
      let response = await login(email, password);
      console.log(response);
      alert("Login successful. Token: " + response.token);
    } catch (error: any) {
      console.log(error);
      alert("Login failed! " + error.message);
    }
  };

  return (
    <div className="registration-form">
      <h1>Login Form</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Login</button>
    </div>
  );
}


export default Login;
