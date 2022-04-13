import React from 'react';
import { Form } from 'react-bootstrap';
import './Singup.css'

const Singup = () => {
    return (
        <div className="login_area">
      <div className="w-50 inside_login">
        <h2>Please Sing Up !!!!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Control type="submit" value="submit" />
        </Form>
      </div>
    </div>
    );
};

export default Singup;