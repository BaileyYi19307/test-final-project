import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BACKEND_URL;

export function Register() {
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission behavior

    // collect the form data into an object
    const registrationData = { username, emailAddress, password };

    try {
      // send the registration data to the backend API
      const response = await fetch(`${API}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
        credentials: "include", // include credentials (like cookies) if needed
      });

      if (response.ok) {
        console.log("Successfully registered");
        // reset form fields
        setUsername("");
        setEmailAddress("");
        setPassword("");
        // navigate to the login page after successful registration
        navigate("/");
      } else {
        console.log("Failed to submit registration data");
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group controlId="emailAddress">
        <Form.Label>Email Address:</Form.Label>
        <Form.Control
          type="text"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          required
          placeholder="Enter your email address"
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}
