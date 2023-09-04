import React, { FC, useState } from "react";
import { login } from "../../api/user";
import { setUser } from "../../utils/storage";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    console.log("Login data:", { email, password });
    try {
      let response = await login(email, password);
      console.log(response);
      setUser(response);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      alert("Login failed! " + error.message);
    }
  };

  return (
    <>
      <h1>Login Form</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegistration}>
        Login
      </button>
      <div>
        To create an account, please <Link to="/register"> register </Link>
      </div>
    </>
  );
};

export default Login;
