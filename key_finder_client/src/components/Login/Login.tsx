import { FC, useState } from "react";
import { login } from "../../api/user";
import { setUser } from "../../utils/storage";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { showAlert } from "../../utils/alert";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      let response = await login(email, password);
      setUser(response);
      showAlert("Login successful!");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      showAlert("Login failed! " + error.message);
    }
  };

  return (
    <>
      <h3 className="text-center">Login Form</h3>
      <hr />
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Group>
          <Form.Text className="text-muted">
            No account yet? Please <Link to="/register"> register </Link>.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;
