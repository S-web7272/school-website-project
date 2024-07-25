import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/AboutUs.css';
import backgroundImage from '../style/school.jpg';

function AboutUs() {
  return (
    <div className="about-us-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <h2> About The School </h2>
        <Row>
          <Col>
            <h2 className="text-center mt-4">Inspired by Global Experiences, Fueled By Hard Work & Passion.</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p>Since our founding in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students. We stand out not just in our affection for creativity but also in our commitment to trust, transparency, and honesty working diligently to complete every project we lay our hands on.</p>
            <Button variant="primary" className="mt-4">View Our Case Studies</Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h3>Partial Client List</h3>
            <p>Sheldon Hosten / The Millennial Broker / Olander Wilson / Zide / EID/Night / DareGoods Inc. / Robert Martin Company / ChuckuvArt / Julie Park at The Springs / South Bronx Luxury Real Estate / South Bronx Media Group / Thompson & Thompson YP Group / CAS Consulting Services / The Shepherd’s Academy / Primus Success Center / Primus Consulting Inc / Primus Tutoring / The William’s Team / Strive Basketball / The Shepherd’s Spring</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h3>Our Offerings</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quality Education</td>
                  <td>Providing high-standard education with a comprehensive curriculum.</td>
                </tr>
                <tr>
                  <td>Extracurricular Activities</td>
                  <td>Encouraging participation in various sports, arts, and cultural activities.</td>
                </tr>
                <tr>
                  <td>Community Engagement</td>
                  <td>Fostering a sense of community and social responsibility among students.</td>
                </tr>
                <tr>
                  <td>Advanced Facilities</td>
                  <td>Offering state-of-the-art facilities like labs, libraries, and sports complexes.</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
