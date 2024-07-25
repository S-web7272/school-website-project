import React from 'react';
import { Container, Table } from 'react-bootstrap';
import '../style/Student.css';

function Students() {
  return (
    <Container className="students-container">
      <h2 className="students-title">Students</h2>
      
      <h3 className="students-subtitle">Life at Springdale</h3>
      <Table striped bordered hover className="students-table">
        <thead>
          <tr>
            <th>Extracurricular Activities</th>
            <th>Clubs and Societies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</td>
            <td>Literary Society, Environmental Club, Astronomy Club, Coding Club</td>
          </tr>
        </tbody>
      </Table>
      
      <h3 className="students-subtitle">Achievements</h3>
      <Table striped bordered hover className="students-table">
        <thead>
          <tr>
            <th>Achievements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith - National Level Math Olympiad Winner</td>
          </tr>
          <tr>
            <td>Sarah Lee - Gold Medalist in State Swimming Championship</td>
          </tr>
          <tr>
            <td>Tech Innovators Club - Winners of Inter-School Robotics Competition</td>
          </tr>
        </tbody>
      </Table>
      
      <h3 className="students-subtitle">Student Council</h3>
      <Table striped bordered hover className="students-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>President</td>
            <td>Amy Parker</td>
            <td>Grade 12</td>
          </tr>
          <tr>
            <td>Vice President</td>
            <td>Rajiv Mehta</td>
            <td>Grade 11</td>
          </tr>
          <tr>
            <td>Secretary</td>
            <td>Lisa Wong</td>
            <td>Grade 10</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Students;
