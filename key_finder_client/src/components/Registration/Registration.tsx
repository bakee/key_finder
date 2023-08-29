import React, { FC, useState } from 'react';
import { register } from '../../api/user';

interface RegistrationProps {}

const Registration: FC<RegistrationProps> = () =>
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    // Here you can implement your registration logic
    console.log('Registration data:', { name, email, password });
    let response = await register(name, email, password);
    console.log(response);
  };

return (
<div className="registration-form">
  <h1>Registration Form</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={handleRegistration}>Register</button>
      </div>
);
}

export default Registration;
