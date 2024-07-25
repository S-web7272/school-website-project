import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import '../style/Academics.css';

function Academics() {
  return (
    <Container className="academics-container">
      <h2 className="academics-title">Academics</h2>
      <Row>
        <Col>
          <h3 className="academics-subtitle">Curriculum</h3>
          <Table striped bordered hover className="academics-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Subjects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary (Grades 1-5)</td>
                <td>English, Mathematics, Science, Social Studies, Art, Physical Education</td>
              </tr>
              <tr>
                <td>Secondary (Grades 6-10)</td>
                <td>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</td>
              </tr>
              <tr>
                <td>Senior Secondary (Grades 11-12)</td>
                <td>
                  <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English<br />
                  <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="academics-subtitle">Teaching Methodologies</h3>
          <Table striped bordered hover className="academics-table">
            <tbody>
              <tr>
                <td>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="academics-subtitle">Educational Resources</h3>
          <Table striped bordered hover className="academics-table">
            <tbody>
              <tr>
                <td>Digital classrooms, interactive learning modules, and access to online educational platforms.</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Academics;
