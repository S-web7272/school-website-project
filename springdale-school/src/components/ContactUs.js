import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../style/ContactUs.css';

function ContactUs() {
  return (
    <Container>
      <h2>Contact Us</h2>
      <div>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019409451065!2d144.95373531550412!3d-37.81720927975185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1d8e8f1%3A0xb82b6944da0d3e0!2sEducation%20Lane%2C%20Cityville!5e0!3m2!1sen!2sau!4v1575729366346!5m2!1sen!2sau"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </Container>
  );
}

export default ContactUs;
