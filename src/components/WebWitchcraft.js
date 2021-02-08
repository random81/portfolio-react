import React from 'react';
import videoMean from "../../images/MEANstack.mp4";
import videoJava from "../../images/eclipse-workspace - Eclipse IDE 2019-06-12 15-30-48.mp4";
import { Container, Row, Col } from 'reactstrap';
import Foot from './Foot';
import TerminalAnimated from './TerminalAnimated';
import islandProject from '../../images/Island.jpg';
import position1From from '../../images/position1.jpg';
import healthFlex from '../../images/healthflex.jpg';
import htmlEmail1 from '../../images/htmlemail1.jpg';
import imagePixel from '../../images/imagepixel.png';
import tomatoe from '../../images/tomatoe.jpg';
import sass2 from '../../images/sass2.jpg';
import final2 from '../../images/final2.jpg';

const WebWitchcraft = (props) => {
  return (
    <div>
      <Container>
        <TerminalAnimated terminalText="Here are some samples of my web developement. " />
        <center><h1>Web Sites</h1>
          <h3>Non-commerical Projects:</h3>
        </center>
        <div className="row">
          <div className="col-sm-12">
            <h3>nodeJS/MEAN:</h3>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>MEAN Project (mango, express, angular, nodejs)</h2>
            <div className="imagery">
              <object width="408" height="288">
                <param name="movie" value={videoMean} />
                <embed src={videoMean} width="408" height="288" />
              </object>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Java Web App (database driven)</h2>
            <div className="imagery">
              <object width="408" height="288">
                <param name="movie" value={videoJava} />
                <embed src={videoJava} width="408" height="288" />
              </object>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Diagnostic project</h2>
            <div className="imagery">
              <a href="/fireAnt-diagnostic-project/index.html"><img src={islandProject} height="288" width="408" /></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Positioning project</h2>

            <div className="imagery">
              <a href="/fireAnt-positioning-project/index.html"><img src={position1From} height="288" width="408" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Elastic project</h2>
            <div className="imagery">
              <a href="/fireAnt-elastic-project/index.html"><img src={healthFlex} height="288" width="408" /></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>HTML email project</h2>
            <div className="imagery">
              <a href="/fireAnt-htmlemail-project/index.html"><img src={htmlEmail1} height="288" width="408" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>HTML email project</h2>
            <h2>Form project</h2>
            <div className="imagery">
              <a href="/fireAnt-form-project/index.html"><img src={imagePixel} height="288" width="408"></img></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Element project</h2>
            <div className="imagery">
              <a href="/fireAnt-element-project/index.html"><img src={tomatoe} height="288" width="408" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Responsive Project</h2>
            <div className="imagery">
              <a href="/fireAnt-responsive-project/index.html"><img src={tomatoe} height="288" width="408" /></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Sass Project</h2>
            <div className="imagery">
              <a href="/fireAnt-sass-project/index.html"><img src={sass2} height="288" width="408" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2>Tribute Site</h2>
            <div className="imagery">
              <a href="/fireAnt-final-project/index.html"><img src={final2} height="288" width="408" /></a>
            </div>
          </div>
        </div>
        <Foot />
      </Container>
    </div>
  );
};

export default WebWitchcraft;
