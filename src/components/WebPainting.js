import React from 'react';
import TerminalAnimated from './TerminalAnimated';
import { Container, Row, Col } from 'reactstrap';
import Foot from './Foot';
import proj3_fireAntFinalposthalfed from '../../images/proj3_fireAntFinalposthalfed.jpg';
import ThreeBucket_fireAntK2 from '../../images/ThreeBucket_fireAntK2.jpg';
import fireAntK_overTheMoon3b from '../../images/fireAntK_overTheMoon3.jpg';
import HTMLemail2 from '../../images/HTMLemail2.jpg';
import BannerAd2_fireAntK from '../../images/BannerAd2_fireAntK.jpg';
import index_fireAntK2 from '../../images/index_fireAntK2.jpg';
import IpadLandscape2_fireAntK from '../../images/IpadLandscape2_fireAntK.jpg';
import IpadPortrait2_fireAntK from '../../images/IpadPortrait2_fireAntK.jpg';
import smartphoneLandscape2_fireAntK from '../../images/smartphoneLandscape2_fireAntK.jpg';
import smartphonePortrait_fireAntK2 from '../../images/smartphonePortrait_fireAntK2.jpg';

const WebWitchcraft = (props) => {
  const terminalMessage = 'Here are some samples of my web design. ';
  return (
    <div>
      <Container>
        <TerminalAnimated terminalText={terminalMessage} />
        <center>
          <h1>Design Projects</h1>
          <h3>Non-commerical Projects</h3>
          {' '}

        </center>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <div className="head2">
              {' '}
              <h2>Long Site</h2>
            </div>
            <div className="killImage">
              <a href={proj3_fireAntFinalposthalfed}><img src={proj3_fireAntFinalposthalfed} id="kill" /></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Three Buckets</h2>
            <div className="imagery">
              <a href={ThreeBucket_fireAntK2}><img src={ThreeBucket_fireAntK2} height="295" width="408" /></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Logo</h2>
            <div className="imagery">
              <a href={fireAntK_overTheMoon3b}><img src={fireAntK_overTheMoon3b} height="408" width="408" /></a>

            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>HTML email</h2>
            <div className="imagery">
              <a href={HTMLemail2}><img src={HTMLemail2} height="544" width="408" /></a>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Banner Ad</h2>
            <div className="imagery">
              <a href={BannerAd2_fireAntK}><img src={BannerAd2_fireAntK} height="340" width="408" /></a>

            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Index Site</h2>
            <div className="imagery">
              <a href={index_fireAntK2}><img src={index_fireAntK2} height="307" width="408" /></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Ipad Landscape</h2>
            <div className="imagery">
              <a href={IpadLandscape2_fireAntK}><img src={IpadLandscape2_fireAntK} height="306" width="408" /></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Ipad Portrait</h2>
            <div className="imagery">
              <a href={IpadPortrait2_fireAntK}><img src={IpadPortrait2_fireAntK} height="524" width="408" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Smartphone Landscape</h2>
            <div className="imagery">
              <a href={smartphoneLandscape2_fireAntK}><img src={smartphoneLandscape2_fireAntK} height="237" width="408" /></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <Col md="6" sm="12" />
            <h2>Smartphone Portrait</h2>
            <div className="imagery">
              <a href={smartphonePortrait_fireAntK2}><img src={smartphonePortrait_fireAntK2} height="774" width="450" /></a>
            </div>
          </div>
        </div>
        <Foot />
      </Container>
    </div>
  );
};
export default WebWitchcraft;
