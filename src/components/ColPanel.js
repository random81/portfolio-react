import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

const ColPanel = (props) => {
  const {
    linkTo, imageSrc, className, h2,
  } = props;
  let heightfix = '';
  let hide = '';
  if (h2 === 'Long Site') {
    heightfix = 'kill';
  }
  if (h2 === '') {
    hide = 'none';
  }

  return (
    <Col md="6" sm="12">
      <h2>{h2}</h2>
      <div className={className}>
        <a href={linkTo}><img src={imageSrc} height={imageSrc.height} width="408" className={hide} id={heightfix} alt="sample of work" /></a>
      </div>
    </Col>
  );
};

ColPanel.propTypes = {
  linkTo: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
};
export default ColPanel;
