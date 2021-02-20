import React from 'react';
import { Container } from 'reactstrap';
import Foot from './Foot';
import Title from './Title';
import TerminalAnimated from './TerminalAnimated';
import islandProject from '../../images/Island.jpg';
import position1From from '../../images/position1.jpg';
import healthFlex from '../../images/healthflex.jpg';
import htmlEmail1 from '../../images/htmlemail1.jpg';
import imagePixel from '../../images/imagepixel.png';
import tomatoe from '../../images/tomatoe.jpg';
import sass2 from '../../images/sass2.jpg';
import final2 from '../../images/final2.jpg';
import RowPanels from './RowPanels';

const WebWitchcraft = () => {
  const terminalMessage = 'Here are some samples of my front end work. ';
  const gridContent = [
    [['/portfolio-react/fireAnt-diagnostic-project/index.html', islandProject, 'Island'],
      ['/portfolio-react/fireAnt-positioning-project/index.html', position1From, 'Classic Art']],
    [['/portfolio-react/fireAnt-elastic-project/index.html', healthFlex, 'Health'],
      ['/portfolio-react/fireAnt-htmlemail-project/index.html', htmlEmail1, 'Email']],
    [['/portfolio-react/fireAnt-form-project/index.html', imagePixel, 'Forms'],
      ['/portfolio-react/fireAnt-element-project/index.html', tomatoe, 'Tomatoe']],
    [['/portfolio-react/fireAnt-responsive-project/index.html', tomatoe, 'Responsive Tomatoe'],
      ['/portfolio-react/fireAnt-sass-project/index.html', sass2, 'Sass-y']],
    [['/portfolio-react/fireAnt-final-project/index.html', final2, 'Psd Template']],
  ];

  return (
    <Container>
      <TerminalAnimated terminalText={terminalMessage} />
      <Title h1="Web Sites" h3="front end:" />
      <RowPanels boxData={gridContent} />
      <Foot />
    </Container>
  );
};
export default WebWitchcraft;
