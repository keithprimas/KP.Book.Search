// see SignupForm.js for comments
<<<<<<< HEAD
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);


  const [login, { error }] = useMutation(LOGIN_USER);

=======
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
<<<<<<< HEAD
      const { data } = await login({
        variables: { ...userFormData },
      });

      // Store the token in local storage
      Auth.login(data.login.token);
      console.log(data);
    } catch (e) {
      console.error(e);
=======
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
      setShowAlert(true);
    }

    setUserFormData({
<<<<<<< HEAD
      username: "",
      email: "",
      password: "",
=======
      username: '',
      email: '',
      password: '',
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
<<<<<<< HEAD
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
=======
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
<<<<<<< HEAD
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
=======
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
<<<<<<< HEAD
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
        {error && <div>Login failed</div>}
=======
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
      </Form>
    </>
  );
};

<<<<<<< HEAD
export default LoginForm;
=======
export default LoginForm;
>>>>>>> f9a59847e1b4f4d33219975b375796814b968248
