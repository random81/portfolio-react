import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Foot = (props) => (
  <div>
    <Container>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <div className="foot">
            {' '}
          </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <div className="foot d-flex align-items-center">
            <p>Thank you for visiting!</p>
          </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <div className="foot">
            {' '}
          </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </Container>
  </div>
);
export default Foot;
