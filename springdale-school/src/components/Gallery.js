import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../style/Gallery.css'; // Import your custom CSS file

function Gallery() {
  return (
    <Container className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <Row className="gallery-row">
        <Col md={4} className="gallery-col">
          <Image src="/gal6sports.jpg" alt="Sports Day" fluid className="gallery-img" />
          <p className="gallery-caption">Students participating in various sports events.</p>
        </Col>
        <Col md={4} className="gallery-col">
          <Image src="/gal5science.jpg" alt="Science Exhibition" fluid className="gallery-img" />
          <p className="gallery-caption">Students presenting their science projects.</p>
        </Col>
        <Col md={4} className="gallery-col">
          <Image src="/gal4clu.jpg" alt="Cultural Fest" fluid className="gallery-img" />
          <p className="gallery-caption">Students performing in the cultural fest.</p>
        </Col>
      </Row>
      <Row className="gallery-row">
        <Col md={4} className="gallery-col">
          <Image src="/gal3gli.jpg" alt="Classroom" fluid className="gallery-img" />
          <p className="gallery-caption">A glimpse of our interactive classrooms.</p>
        </Col>
        <Col md={4} className="gallery-col">
          <Image src="/gal2lib.jpg" alt="Library" fluid className="gallery-img" />
          <p className="gallery-caption">Students reading and studying in the school library.</p>
        </Col>
        <Col md={4} className="gallery-col">
          <Image src="/gal 1.jpg" alt="Play" fluid className="gallery-img" />
          <p className="gallery-caption">Student play in school.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Gallery;
