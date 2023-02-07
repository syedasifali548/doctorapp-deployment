import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
const HomePage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
      <h1>Home Page-1</h1>
          </Col>
          <Col md={6}>
      <h1>Home Page-2</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
