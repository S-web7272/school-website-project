import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../style/Home.css';

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="/banner3.png" alt="Sports Day" />
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="/banner1.png" alt="Science Exhibition" />
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src="/banner2.png" alt="Cultural Fest" />
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5 text-center bg-light">
        <h1>Welcome to Springdale Public School</h1>
        <p>We nurture young minds for a brighter future.</p>
      </Container>

      <Container className="text-center py-5">
        <Row>
          <Col md={3}>
            <Card className="box-card">
              <Card.Body>
                <Card.Title>Admissions</Card.Title>
                <Card.Text>
                  Learn more about our admission process.
                </Card.Text>
                <Button href="/admissions" className="custom-btn">Go to Admissions</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="box-card">
              <Card.Body>
                <Card.Title>Faculty</Card.Title>
                <Card.Text>
                  Meet our dedicated faculty members.
                </Card.Text>
                <Button href="/faculty" className="custom-btn">Go to Faculty</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="box-card">
              <Card.Body>
                <Card.Title>Enquiry</Card.Title>
                <Card.Text>
                  Have questions? Get in touch with us.
                </Card.Text>
                <Button href="/contact-us" className="custom-btn">Go to Enquiry</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="box-card">
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Learn more about our school.
                </Card.Text>
                <Button href="/about-us" className="custom-btn">Go to About Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
