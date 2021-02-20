import React from 'react';
import { Container } from 'reactstrap';
import Foot from './Foot';
import Title from './Title';
import TerminalAnimated from './TerminalAnimated';
import proj3FireAntFinalposthalfed from '../../images/proj3_fireAntFinalposthalfed.jpg';
import ThreeBucketFireAntK2 from '../../images/ThreeBucket_fireAntK2.jpg';
import fireAntKOverTheMoon3b from '../../images/fireAntK_overTheMoon3.jpg';
import BannerAd2FireAntK from '../../images/BannerAd2_fireAntK.jpg';
import indexFireAntK2 from '../../images/index_fireAntK2.jpg';
import IpadLandscape2FireAntK from '../../images/IpadLandscape2_fireAntK.jpg';
import IpadPortrait2FireAntK from '../../images/IpadPortrait2_fireAntK.jpg';
import smartphoneLandscape2FireAntK from '../../images/smartphoneLandscape2_fireAntK.jpg';
import smartphonePortraitFireAntK2 from '../../images/smartphonePortrait_fireAntK2.jpg';
import HTMLemail2 from '../../images/HTMLemail2.jpg';
import RowPanels from './RowPanels';

const WebPaintings = () => {
  const terminalMessage = 'Here are some samples of my web design. ';
  const gridContent = [
    [[proj3FireAntFinalposthalfed, proj3FireAntFinalposthalfed, 'Long Site'],
      [ThreeBucketFireAntK2, ThreeBucketFireAntK2, 'Three Buckets']],
    [[fireAntKOverTheMoon3b, fireAntKOverTheMoon3b, 'Logo'],
      [HTMLemail2, HTMLemail2, 'HTML email']],
    [[smartphoneLandscape2FireAntK, smartphoneLandscape2FireAntK, 'Smartphone Landscape'],
      [smartphonePortraitFireAntK2, smartphonePortraitFireAntK2, 'Smartphone Portrait']],
    [[IpadLandscape2FireAntK, IpadLandscape2FireAntK, 'Ipad Landscape'],
      [IpadPortrait2FireAntK, IpadPortrait2FireAntK, 'Ipad Portrait']],
    [[indexFireAntK2, indexFireAntK2, 'Index Site'],
      [BannerAd2FireAntK, BannerAd2FireAntK, 'image 9']],
  ];

  return (
    <Container>
      <TerminalAnimated terminalText={terminalMessage} />
      <Title h1="Design Projects" h3="Photoshop Projects:" />
      <RowPanels boxData={gridContent} />
      <Foot />
    </Container>
  );
};
export default WebPaintings;
