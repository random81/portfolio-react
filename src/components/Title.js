import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { h1, h3 } = props;
  return (
    <div>
      <center>
        <h1>{h1}</h1>
        <h3>{h3}</h3>
      </center>
    </div>
  );
};
Title.propTypes = {
  h1: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
};
export default Title;
