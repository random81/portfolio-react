import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const Foot = () => (
  <div>
    <Container>
      <Row>
        <Col md="4" />
        <Col md="4">
          <div className="foot">
            {' '}
          </div>
        </Col>
        <Col md="4" />
      </Row>
      <Row>
        <Col md="4" />
        <Col md="4">
          <div className="foot d-flex align-items-center">
            <p>Thank you for visiting!</p>
          </div>
        </Col>
        <Col md="4" />
      </Row>
      <Row className="row">
        <Col md="4" />
        <Col md="4">
          <div className="foot">
            {' '}
          </div>
        </Col>
        <Col md="4" />
      </Row>
    </Container>
  </div>
);
export default Foot;
