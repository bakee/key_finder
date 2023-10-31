import React, { FC, useState } from "react";
import { register } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";

interface RegistrationProps {}

const Registration: FC<RegistrationProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    let response = await register(name, email, password);
    navigate("/");
  };

  return (
    <>
      <h1>Registration Form</h1>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
      </div>
      <button className="btn btn-primary" onClick={handleRegistration}>
        Register
      </button>
      <br />
      <p>
        If you already have an account, please <Link to="/login">login</Link>.
      </p>
    </>
  );
};

export default Registration;
