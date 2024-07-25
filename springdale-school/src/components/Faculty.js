import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../style/Faculty.css'; // Add your custom CSS file

// Importing images
import johnDoeImg from '../Images/john.jpeg';
import janeSmithImg from '../Images/jane.jpeg';
import emilyJohnsonImg from '../Images/Emily.jpeg';
import michaelBrownImg from '../Images/michel.jpeg';
import sophiaDavisImg from '../Images/Shofia.jpeg';
import davidWilsonImg from '../Images/David.jpeg';

function Faculty() {
  return (
    <Container className="faculty-container">
      <h2 className="faculty-title">Faculty Members</h2>
      <Row className="faculty-member d-flex align-items-center">
        <Col md={4}>
          <Image src={johnDoeImg} roundedCircle className="faculty-img" />
        </Col>
        <Col md={8}>
          <h3>John Doe</h3>
          <p>Principal, M.Ed, 20 years of experience in educational administration.</p>
        </Col>
      </Row>
      <Row className="faculty-member d-flex align-items-center">
        <Col md={4}>
          <Image src={janeSmithImg} roundedCircle className="faculty-img" />
        </Col>
        <Col md={8}>
          <h3>Jane Smith</h3>
          <p>Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</p>
        </Col>
      </Row>
      <Row className="faculty-member d-flex align-items-center">
        <Col md={4}>
          <Image src={emilyJohnsonImg} roundedCircle className="faculty-img" />
        </Col>
        <Col md={8}>
          <h3>Emily Johnson</h3>
          <p>English Teacher, M.A. in English, 10 years of teaching experience.</p>
        </Col>
      </Row>
      <Row className="faculty-member d-flex align-items-center">
        <Col md={4}>
          <Image src={michaelBrownImg} roundedCircle className="faculty-img" />
        </Col>
        <Col md={8}>
          <h3>Michael Brown</h3>
          <p>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</p>
        </Col>
      </Row>
      <Row className="faculty-member d-flex align-items-center">
        <Col md={4}>
          <Image src={sophiaDavisImg} roundedCircle className="faculty-img" />
        </Col>
        <Col md={8}>
          <h3>Sophia Davis</h3>
          <p>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</p>
        </Col>
      </Row>
      <Row className="faculty-member d-flex align-items-center">
        <Col md={4}>
          <Image src={davidWilsonImg} roundedCircle className="faculty-img" />
        </Col>
        <Col md={8}>
          <h3>David Wilson</h3>
          <p>Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Faculty;
