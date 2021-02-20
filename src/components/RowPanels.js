import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';
import ColPanel from './ColPanel';

const RowPanels = (props) => {
  const { boxData } = props;
  return (
    <span>
      {boxData.map((entry, index) => (
        <Row>
          <ColPanel
            linkTo={(boxData[index][0] !== undefined) ? boxData[index][0][0] : ''}
            key={(boxData[index][0] !== undefined) ? index * 2 : ''}
            imageSrc={(boxData[index][0] !== undefined) ? boxData[index][0][1] : ''}
            className="imagery"
            h2={(boxData[index][0] !== undefined) ? boxData[index][0][2] : ''}
          />
          <ColPanel
            linkTo={(boxData[index][1] !== undefined) ? boxData[index][1][0] : ''}
            key={(boxData[index][1] !== undefined) ? index * 2 + 1 : ''}
            imageSrc={(boxData[index][1] !== undefined) ? boxData[index][1][1] : ''}
            className="imagery"
            h2={(boxData[index][1] !== undefined) ? boxData[index][1][2] : ''}
          />
        </Row>
      ))}
    </span>
  );
};
RowPanels.propTypes = {
  boxData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
};
export default RowPanels;
