import React, { FC, useState } from "react";
import { register } from "../../api/user";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { showAlert } from "../../utils/alert";

interface RegistrationProps {}

const Registration: FC<RegistrationProps> = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isAgrred, setIsAgreed] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegistration = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      showAlert(
        "Password and Confirm password does not match! Please fix and retry."
      );
      return;
    }
    let response = await register(name, email, password);
    showAlert("Registration was successful!");
    navigate("/");
  };

  return (
    <>
      <h3 className="text-center">Registration Form</h3>
      <hr />
      <Form onSubmit={handleRegistration}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Please use just a single word. You can use your first name or nick
            name.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            It can be a non-existing email for now. We'll never send any email
            to you.
          </Form.Text>
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

        <Form.Group className="mb-3">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="I understand the inconveience of using an unfinished product."
            checked={isAgrred}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!isAgrred}>
          Register
        </Button>
        <Form.Group>
          <Form.Text className="text-muted">
            If you already have an account, please{" "}
            <Link to="/login">login</Link>.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default Registration;
