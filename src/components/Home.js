import React, { useEffect, useRef } from 'react';
import dragonA from '../../images/dragonGraphic.png';
import dragonB from '../../images/dragonsGraphic2.png';
import dragonC from '../../images/dragonGraphic3.png';
import { Container, Row, Col } from 'reactstrap';
import Foot from './Foot';
import TerminalAnimated from './TerminalAnimated';
import castleCopy from '../../images/castle copy.png';
import inventory from '../../images/inventory.png';

const Home = (props) => {
  const refUnmounted = useRef(false);
  function loadScripts() {
    // $('.castleA')[0].style.display = 'none';
    // $('.castleA').style.display = 'none';
    let opacityTotal = 0;
    let marginTotal = 0;
    let blurTotal = 10;
    let toggle = false;
    // const a = 0;
    let storedInterval;
    let storedIntervalInv;
    let storedIntervalDragon;
    let storedIntervalSky;
    const rateInv = 12;
    // let x;
    let marginTopInvA = $('#challengeHeader2').height() + $('#boxA').height();
    marginTopInvA = `-${marginTopInvA}`;
    // set height for inventory:
    $('#boxB').css('marginTop', `${marginTopInvA}px`);
    // grab the inventory from the html, then grab the text, assign a click event with
    // display none/block. nice inventory display effect.
    const boxUlTwo = document.getElementById('boxB').getElementsByTagName('ul')[0];
    // now assign the click event to the inventory text.
    const boxUl = document.getElementById('inv');
    // there should also be another interval type effect for changing the opacity
    function toggleDisplay() {
      function timerInv() {
        let marginZeroTestOne = 0;
        boxUlTwo.style.opacity = opacityTotal;
        boxUlTwo.style.WebkitFilter = `blur(${blurTotal}px)`;
        // prevent inventory list margin from falling off page keep at 0, for side.
        marginZeroTestOne = boxUlTwo.style.marginLeft;
        if (marginTotal >= 0 || marginZeroTestOne === '') {
          boxUlTwo.style.marginLeft = `${marginTotal}px`;
        }

        boxUlTwo.style.display = 'block';

        if ((opacityTotal > 1 && marginTotal <= 0) || ((toggle && marginTotal) <= 0)) {
          clearInterval(storedIntervalInv);
          boxUlTwo.style.marginLeft = '0%';
          console.log('reached if marginTotal < 0');
          boxUlTwo.style.opacity = 1;
          boxUlTwo.style.WebkitFilter = 'blur(0px)';
          blurTotal = 10;
        } else {
          opacityTotal += 0.01;
          blurTotal -= 0.30;
          marginTotal -= 12;
        }
      }
      if (!toggle) {
        // toggle starts off false for no inventory
        storedIntervalInv = setInterval(timerInv, rateInv);
        toggle = true;
        marginTotal = document.body.clientWidth / 2;
        // this is used to get the position for the inventory iin the center starting at toggle
        // need to set heights:
      } else {
        toggle = false;
        // now toggle will be false
        boxUlTwo.style.display = 'none';
        //  rememeber to reenable in css the display none in boxB
        clearInterval(storedIntervalInv);
        opacityTotal = 0;
        // get the width of the body, and place box at the center
        marginTotal = document.body.clientWidth / 2;
      }
    }
    boxUl.addEventListener('click', toggleDisplay, false);
    function fixHeights() {
      const boxBHeightTest = $('#boxB').height();
      if (boxBHeightTest <= 0) {
        $('#boxB ul').css('opacity', '0');
        $('#boxB ul').css('display', 'block');
      }
      const lavaForeground = $('#challengeHeader2').height() + $('#Champion_box').height();
      const lavaForegroundLava = $('#challengeHeader2').height() + $('#lava').height();
      const boxBHeight = $('#boxB').height();

      if (lavaForeground < lavaForegroundLava && lavaForegroundLava > boxBHeight) {
        $('#boxB ul').height(lavaForegroundLava);
        // make lava taller by adding the difference between the parts and making that difference
      } else if (lavaForeground > boxBHeight) {
        $('#boxB ul').height(lavaForeground);
        // make lava taller by adding the difference between the parts and making that difference
      } else {
        $('#Champion').css('padding-bottom', '0px');
        const boxAandHeader = $('#challengeHeader2').height() + $('#boxA').height();
        // make the bottom exten. champion height should be added diffe
        const neededAddHeight = boxBHeight - boxAandHeader; // make this the height of chamion
        $('#Champion').height(neededAddHeight);
      }
    }
    window.addEventListener('resize', fixHeights, false);
    function adjustHeight() {
      if (refUnmounted.current) {
        // check on unmount and initial
        // already mounted clean up stuff
        clearInterval(storedInterval);
        return;
      }
      const castleHeight = $('img#castle')[0].height;
      let terminalWidth = $('#terminal').width();
      terminalWidth /= 8;
      const divArray = $('.layer').find('div');
      divArray.each(function () {
        $(this).height(castleHeight * 0.25);
        $(this).width(terminalWidth);
      });

      // take height of castle A and height of landscape, subtract. m
      // make the differece the margin top of the of castle A
      // this adjust height will be called also when sky has finished loading.
      // because there is no height to refernce before sky is function completes.
      // 4*12.5%width of body is the projected height of landscape.
      // use that number to set the margin top for the castleA

      let marginTopInv = $('#challengeHeader2').height() + $('#boxA').height();
      marginTopInv = `-${marginTopInv}`;
      // set height for inventory:
      $('#boxB').css('marginTop', `${marginTopInv}px`);
      // if lava foreground is longer than boxB then make boxB height that of lava
      // if boxB longer than lava foreground make lava height of boxB
    }
    let c = 0;
    let d = 0;
    let counter = 0;
    const skyRate = 0.05;
    let rotation = 90;
    let skyBool = true;

    function skyTimer(callback1, callback2) {
      // what needs to happen here is there should be a mechanism
      // that allow for the incrimentation of the div number, so once you are done rotating
      // move on the next div
      if (refUnmounted.current) {
        // check on unmount and initial
        // already mounted clean up stuff
        clearInterval(storedIntervalSky);
        return;
      }
      if (counter === 32) {
        clearInterval(storedIntervalSky);
        skyBool = false;
        rotation = 180;
        counter = 0;
        d = 0;
        c = 0;
        callback1();
        callback2();
        return skyBool;
      }

      if (skyBool) {
        const skyBlock = document.getElementById('landscape').getElementsByClassName('layer')[c].getElementsByTagName('div')[d];
        if (skyBool === true) {
          let castleHeight = $('img#castle')[0].height;
          let terminalWidth = $('#terminal').width();
          castleHeight *= 0.25;
          terminalWidth /= 8;
          castleHeight = castleHeight.toString();
          terminalWidth = terminalWidth.toString();
          skyBlock.style.setProperty('height', `${castleHeight}px`);
          skyBlock.style.setProperty('width', `${terminalWidth}px`);
          skyBlock.style.webkitTransform = `rotateY(${rotation}deg)`;
          skyBlock.style.transform = `rotateY(${rotation}deg)`;
        }
        if (rotation === 180 && d !== 7) {
          rotation = 90;
          d += 1;
          counter += 1;
          return d;
        }

        if (d % 7 === 0 && d > 0 && rotation === 180) {
          rotation = 90;
          c += 1;
          d = 0;
          counter += 1;
          return c;
        }
        if (skyBool === true) {
          rotation += 9;
          return rotation;
        }
      } else {

      }
    }
    // landscapee: absolute(sky overlaps all but if total height was height
    // of castle this would work.) ? relative(sky and
    // castle border each other)?->castleA and landscape
    // separate rows.
    // castleA: relative,  margin bottm =0
    // castle  z index 600- for relative, for absolute
    // land positioning relative, padding 10% relative not necessary acutally
    // for this landscape aboslue to work, sky blocks total height for horizon needs
    // to be height of castle image.
    // the sky blocks need to adjust. flex.. auto prob.
    // each sky block is 0.25 height of castle because 4 rows.
    function skyTrigger(skyRatePar) {
      storedIntervalSky = setInterval(skyTimer, skyRatePar, fixHeights, adjustHeight);
    }
    skyTrigger(skyRate);

    // this section will use javascript to make sure that the dragon img
    // is located at the center of the land div.
    // this will work with this equation:   dragon_margin_top=420px-(Hieght of dragon)/2
    // event is load of site and upon body width change,
    // or window resize event if it already exists?
    /***/
    /* 2 */
    window.addEventListener('resize', adjustHeight, false);
    let fixToggleBool = false;
    function fixToggleHeight() {
      if (!fixToggleBool) {
        fixToggleBool = true;
        console.log(`fixToggleBool status:${fixToggleBool}`);
        const boxBHeightTest = $('#boxB').height();
        if (boxBHeightTest <= 0) {
          $('#boxB ul').css('opacity', '0');
          $('#boxB ul').css('display', 'block');
        }
        // shoud be chamionbox heght +challenger2 height - foot height
        const lavaForeground = $('#challengeHeader2').height() + $('#Champion_box').height();
        const lavaForegroundLava = $('#challengeHeader2').height() + $('#lava').height();
        const boxBHeight = $('#boxB').height();
        if (lavaForeground < lavaForegroundLava && lavaForegroundLava > boxBHeight) {
          $('#boxB ul').height(lavaForegroundLava);
          // make lava taller by adding the difference between the parts and making that difference
        } else if (lavaForeground > boxBHeight) {
          $('#boxB ul').height(lavaForeground);
          // make lava taller by adding the difference between the parts and making that difference
        } else {
          $('#Champion').css('padding-bottom', '0px');
        }
      } else {
        $('#Champion').css('padding-bottom', `${$('#lava').height() * 0.65}px`);
        fixToggleBool = false;
      }
    }
    $('#inv').click(fixToggleHeight);

    let rateDragon = 5;
    // sky related javascript has been moved to effect.js jquery file
    const dragon = document.getElementById('dragon2');
    let imgAtt = dragon.getAttribute('src');
    let rotationZ = 0;
    /*
    function dragonTrigger() {
      timerDragon();
    } */
    function timerDragon() {
      if (refUnmounted.current) {
        // check on unmount and initial
        // already mounted clean up stuff
        clearInterval(storedIntervalDragon);
        return;
      }
      dragon.removeEventListener('click', timerDragon, false);
      dragon.style.webkitTransform = `rotateZ(${rotationZ}deg)`;
      dragon.style.transform = `rotateZ(${rotationZ}deg)`;
      function killSpin() {
        clearInterval(storedIntervalDragon);
        console.log('reached if opactiy=1 statement');
        rotationZ = 0;
        dragon.style.webkitTransform = 'rotateZ(0deg)';
        rateDragon = 0.5;
        imgAtt = dragon.getAttribute('src');
        dragon.addEventListener('click', timerDragon, false);
        return rotationZ;
      }

      function resetSpin() {
        clearInterval(storedIntervalDragon);
        console.log('reached if opactiy=1 statement');
        dragon.style.webkitTransform = 'rotateZ(0deg)';
        rotationZ = 0;
        rateDragon = 0.5;
        return dragon.addEventListener('click', timerDragon, false);
      }

      clearInterval(storedIntervalDragon);
      rotationZ += 40;
      rateDragon += 0.09;
      storedIntervalDragon = setInterval(timerDragon, rateDragon);
      console.log(`chaining z (rotationZ):      ${rotationZ}`);
      // adding the image mid turn so it the loading of img is not noticable.
      // THIS SHOULD BE CHANGED TO HAVE ALL IMAGES
      // PRELOADED, AND SIMPLY ALTERANTE CSS OPACITY LEVELS.
      if (rotationZ > 1700 && imgAtt === dragonA) {
        dragon.setAttribute('src', dragonC);
        dragon.addEventListener('load', killSpin, false);
      }

      if (rotationZ > 1700 && imgAtt === dragonC) {
        dragon.setAttribute('src', dragonB);
        dragon.addEventListener('load', killSpin, false);
      }

      if (rotationZ > 1700 && imgAtt === dragonB) {
        dragon.setAttribute('src', dragonA);
        dragon.addEventListener('load', resetSpin, false);
      }
    }
    dragon.addEventListener('click', timerDragon, false);
  }
  useEffect(() => {
    loadScripts();
  }, [dragonA, dragonB, dragonC, castleCopy, inventory, TerminalAnimated]);

  useEffect(() => {
    if (!refUnmounted.current) {
      return () => { // Unmounted
        refUnmounted.current = true;
      };
    }
  }, [refUnmounted]);

  const terminalMessage = 'Hello, I am a web developer and software developer. I love learning and using programming languages, creating memorable designs, and trying fancy-shmancy coffee. If you have front end or back end work I would like to help you... ';
  return (

    <div>
      <Container>
        <TerminalAnimated terminalText={terminalMessage} />
        <div className="row">
          <div className="col-md-12">
            <div id="landscape">
              <div className="layer">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="layer">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="layer">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
              <div className="layer">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
            <div className="castleA"><img src={castleCopy} alt="castle" id="castle" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="land">
              <div id="dragonGround">
                <div id="dragonOuter"><img id="dragon2" src={dragonA} alt="drgaon" width="630" height="630" /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="challengeHeader">
              <h2>Your Challenge:</h2>
              <h3>Web Development</h3>
            </div>
          </div>
        </div>
        <div className="clear" />
        <div className="tab">
          <div id="vs">
            Vs
            </div>
        </div>
        <div className="clear" />
        <div className="row">
          <div className="col-md-12">
            <div id="challengeHeader2">
              <h2>Your Champion:</h2>
              <h3>Me</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div id="lava">
              <div id="grass">
                <div id="Champion_box">
                  <div id="boxA">
                    <ul>
                      <li><img id="inv" src={inventory} alt="inventory" width="60" height="60" /></li>
                      <li>Inventory</li>
                      <li />
                    </ul>
                  </div>
                  <div id="boxB">
                    <ul>
                      <li><span /></li>
                      <li>Algorithm analysis</li>
                      <li>Web Development</li>
                      <li>Web Design</li>
                      <li>Computer Science</li>
                      <li>UX</li>
                      <li>C++</li>
                      <li>Java</li>
                      <li>PHP</li>
                      <li>Javascript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Assembly</li>
                      <li>Laravel</li>
                      <li>Bootstrap</li>
                      <li>Photoshop</li>
                      <li>Jquery</li>
                      <li>MySql</li>
                      <li>AngularJS</li>
                      <li>MongoDB</li>
                      <li>Express.js</li>
                      <li>NodeJS</li>
                      <li>Jade</li>
                    </ul>
                  </div>
                  <div className="clear" />
                  <div id="Champion" />

                  <Container>
                    <div className="row">
                      <div className="col-md-4" />
                      <div className="col-md-4">
                        <div className="foot">
                          {' '}
                        </div>
                      </div>
                      <div className="col-md-4" />
                    </div>
                    <div className="row">
                      <div className="col-md-4" />
                      <div className="col-md-4">
                        <div className="foot d-flex align-items-center">
                          <p>Thank you for visiting!</p>
                        </div>
                      </div>
                      <div className="col-md-4" />
                    </div>
                    <div className="row">
                      <div className="col-md-4" />
                      <div className="col-md-4">
                        <div className="foot">
                          {' '}
                        </div>
                      </div>
                      <div className="col-md-4" />
                    </div>
                  </Container>
                </div>
              </div>
              <div alt="Brand" id="thedesignSec" />
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};
export default Home;
