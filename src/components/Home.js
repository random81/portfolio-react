import React, { useEffect, useRef } from 'react';
import dragonA from '../../images/dragonGraphic.png';
import dragonB from '../../images/dragonsGraphic2.png';
import dragonC from '../../images/dragonGraphic3.png';
import { Container, Row, Col } from 'reactstrap';
import Foot from './Foot';
import TerminalAnimated from './TerminalAnimated';
import castleCopy from '../../images/castle copy.png';
import dragonGraphic from '../../images/dragonGraphic.png';
import inventory from '../../images/inventory.png';

const Home = (props) => {
  const refUnmounted = useRef(false);
  function loadScripts() {
    $('.castleA')[0].style.display = 'none';
    // $('.castleA').style.display = 'none';
    const { body } = document; // For Chrome, Safari and Opera
    let opacityTotal = 0;
    let marginTotal = 0;
    let blurTotal = 10;
    let savetime;
    let toggle = false;
    const a = 0;
    let storedInterval;
    let storedIntervalInv;
    let storedIntervalDragon;
    let storedIntervalWhite;
    let storedIntervalSky;
    const rate = 50;
    const rateType = 20;
    const rateInv = 12;
    let periodTest;
    let x;
    // grab the inventory from the html, then grab the text, assign a click event with display none/block. nice inventory display effect.
    const box_ul_two = document.getElementById('boxB').getElementsByTagName('ul')[0];
    // now assign the click event to the inventory text.
    const box_ul = document.getElementById('inv');
    box_ul.addEventListener('click', toggleDisplay, false);
    // there should also be another interval type effect for changing the opacity
    function toggleDisplay() {
      if (!toggle) {
        // toggle starts off false for no inventory
        storedIntervalInv = setInterval(timer_inv, rateInv);
        toggle = true;
        marginTotal = document.body.clientWidth / 2;
        // this is used to get the position for the inventory iin the center starting at toggle
        // need to set heights:
      } else {
        toggle = false;
        // now toggle will be false
        box_ul_two.style.display = 'none';
        //  rememeber to reenable in css the display none in boxB
        clearInterval(storedIntervalInv);
        opacityTotal = 0;
        // get the width of the body, and place box at the center
        marginTotal = document.body.clientWidth / 2;
      }

      function timer_inv() {
        let marginZeroTestOne = 0;
        box_ul_two.style.opacity = opacityTotal;
        box_ul_two.style.WebkitFilter = `blur(${blurTotal}px)`;
        // prevent inventory list margin from falling off page keep at 0, for side.
        marginZeroTestOne = box_ul_two.style.marginLeft;
        if (marginTotal >= 0 || marginZeroTestOne === '') {
          box_ul_two.style.marginLeft = `${marginTotal}px`;
        }

        box_ul_two.style.display = 'block';

        const marginZeroTest = box_ul_two.style.marginLeft;
        if (opacityTotal > 1 && marginTotal <= 0 || toggle && marginTotal <= 0) {
          clearInterval(storedIntervalInv);
          box_ul_two.style.marginLeft = '0%';
          console.log('reached if marginTotal < 0');
          box_ul_two.style.opacity = 1;
          box_ul_two.style.WebkitFilter = 'blur(0px)';
          blurTotal = 10;
        } else {
          opacityTotal += 0.01;
          blurTotal -= 0.30;
          marginTotal -= 12;
        }
      }
    }
    function adjustHeight() {
      if (refUnmounted.current) {
        // check on unmount and initial
        // already mounted clean up stuff
        // textArray[0].innerHTML = '';
        clearInterval(storedInterval);
        return;
        // textSplitArr.current = '';
      }
      const bodyWidth = $('body').width();
      const divArray = $('.layer').find('div');
      divArray.each(function () {
        const divWidth = $(this).width();
        $(this).height(bodyWidth * 0.12);
      });
      // take height of castle A and height of landscape, subtract. m
      // make the differece the margin top of the of castle A
      // this adjust height will be called also when sky has finished loading.
      // because there is no height to refernce before sky is function completes.
      // 4*12.5%width of body is the projected height of landscape.
      // use that number to set the margin top for the castleA

      // $('.castleA').style.display = 'block';

      $('.castleA')[0].style.display = 'block';
      const castleAHeight = $('.castleA').height();
      const marginTopCastleA = bodyWidth * 0.48 - castleAHeight;
      $('.castleA').css('margin-top', marginTopCastleA);
      // adjust area of dragon height to match the sky height
      $('#land').height(bodyWidth * 0.48);
      $('#lava').height(bodyWidth * 0.48);
      // adjust height for divs in column in land
      const landHeight = $('#land').outerHeight();
      const dragonHeight = $('#dragonOuter').height();
      const landTotPadd = landHeight - dragonHeight;
      // getting total land padding dividing by half, adding to land top padding, to push dragon to center.
      const halfLand = landTotPadd / 2;
      $('#land').css('padding-top', halfLand);
      let marginTopInvA = $('#challengeHeader2').height() + $('#boxA').height();
      marginTopInvA = `-${marginTopInvA}`;
      // set height for inventory:
      $('#boxB').css('marginTop', `${marginTopInvA}px`);
      $('#Champion').css('padding-bottom', `${$('#lava').height() * 0.65}px`);
      const boxThree = document.getElementById('castle');
      const addThree = boxThree.style.marginBottom;
      console.log('calling adjustHeight');
      // if lava foreground is longer than boxB then make boxB height that of lava
      // if boxB longer than lava foreground make lava height of boxB
    }
    let c = 0;
    let d = 0;
    let counter = 0;
    const sky_rate = 0.05;
    let rotation = 90;
    let skyBool = true;

    function sky_timer(callback) {
      // what needs to happen here is there should be a mechanism that allow for the incrimentation of the div number, so once you are done rotating
      // move on the next div
      if (refUnmounted.current) {
        // check on unmount and initial
        // already mounted clean up stuff
        // textArray[0].innerHTML = '';
        clearInterval(storedIntervalSky);
        return;
        // textSplitArr.current = '';
      }
      if (counter === 32) {
        clearInterval(storedIntervalSky);
        skyBool = false;
        rotation = 180;
        counter = 0;
        d = 0;
        c = 0;
        callback();
        return skyBool;
      }

      if (skyBool) {
        const skyBlock = document.getElementById('landscape').getElementsByClassName('layer')[c].getElementsByTagName('div')[d];
        if (skyBool == true) {
          skyBlock.style.webkitTransform = `rotateY(${rotation}deg)`;
          skyBlock.style.transform = `rotateY(${rotation}deg)`;
        }
        if (rotation == 180 && d !== 7) {
          rotation = 90;
          d++;
          counter += 1;
          return d;
        }

        if (d % 7 == 0 && d > 0 && rotation == 180) {
          rotation = 90;
          c++;
          d = 0;
          counter += 1;
          return c;
        }
        if (skyBool == true) {
          return rotation += 9;
        }
      } else {

      }
    }
    // sky_trigger(sky_rate);
    function sky_trigger(sky_rate) {
      storedIntervalSky = setInterval(sky_timer, sky_rate, adjustHeight);
    }
    sky_trigger(sky_rate);

    // this section will use javascript to make sure that the dragon img is located at the center of the land div.
    // this will work with this equation:   dragon_margin_top=420px-(Hieght of dragon)/2
    // event is load of site and upon body width change, or window resize event if it already exists?
    /***/
    /* 2 */
    // $(window).on('load', function () {
    // window.onload = adjustHeight();
    window.addEventListener('resize', adjustHeight, false);
    // window.onload=fixHeights();
    // window.addEventListener('resize', fixHeights, false);
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
    fixHeights();
    window.addEventListener('resize', fixHeights, false);
    let fixToggleBool = false;
    $('#inv').click(fixToggleHeight);
    function fixToggleHeight() {
      if (!fixToggleBool) {
        fixToggleBool = true;
        console.log(`fixToggleBool status:${fixToggleBool}`);
        const boxBHeightTest = $('#boxB').height();
        if (boxBHeightTest <= 0) {
          $('#boxB ul').css('opacity', '0');
          $('#boxB ul').css('display', 'block');
        }
        const boxBHeightNew = $('#boxA').height() + $('#challengeHeader2').height() + $('#Champion').height();
        //shoud be chamionbox heght +challenger2 height - foot height
        const lavaForeground = $('#challengeHeader2').height() + $('#Champion_box').height();
        const lavaForegroundLava = $('#challengeHeader2').height() + $('#lava').height();
        let boxBHeight = $('#boxB').height();
        if (lavaForeground < lavaForegroundLava && lavaForegroundLava > boxBHeight) {
          $('#boxB ul').height(lavaForegroundLava);
          // make lava taller by adding the difference between the parts and making that difference
        } else if (lavaForeground > boxBHeight) {
          $('#boxB ul').height(lavaForeground);
          var boxAandHeader = $('#challengeHeader2').height() + $('#boxA').height();
          // make the bottom exten. champion height should be added diffe

          boxBHeight = $('#boxB').height();
          var neededAddHeight = boxBHeight - boxAandHeader; // make this the height of chamion
          //$('#Champion').height(neededAddHeight);
          // make lava taller by adding the difference between the parts and making that difference
        } else {
          $('#Champion').css('padding-bottom', '0px');
          var boxAandHeader = $('#challengeHeader2').height() + $('#boxA').height();
          boxBHeight = $('#boxB').height();
          // make the bottom exten. champion height should be added diffe
          var neededAddHeight = boxBHeight - boxAandHeader; // make this the height of chamion
          //$('#Champion').height(neededAddHeight);
        }
      } else {
        $('#Champion').css('padding-bottom', `${$('#lava').height() * 0.65}px`);
        fixToggleBool = false;
        //$('#Champion').height(0);
        //$('#boxB ul').height(boxBHeightNew);
        console.log(`fixToggleBool status:${fixToggleBool}`);
      }
    }

    const dragon_spun = false;
    let rate_dragon = 5;
    // sky related javascript has been moved to effect.js jquery file
    const dragonOut = document.getElementById('dragonOuter');
    const dragon = document.getElementById('dragon2');
    let imgAtt = dragon.getAttribute('src');
    let rotationZ = 0;
    let rotationY = 0;
    dragon.addEventListener('click', dragon_trigger, false);
    function dragon_trigger() {
      timer_dragon();
    }
    function timer_dragon() {
      if (refUnmounted.current) {
        // check on unmount and initial
        // already mounted clean up stuff
        // textArray[0].innerHTML = '';
        clearInterval(storedIntervalDragon);
        return;
        // textSplitArr.current = '';
      }
      dragon.removeEventListener('click', dragon_trigger, false);
      dragon.style.webkitTransform = `rotateZ(${rotationZ}deg)`;
      // dragonOut.style.webkitTransform = ("rotateY(" + rotationY + "deg)");
      // dragonOut.style.transform = ("rotateY(" + rotationY + "deg)");

      dragon.style.transform = `rotateZ(${rotationZ}deg)`;
      function kill_spin() {
        clearInterval(storedIntervalDragon);
        console.log('reached if opactiy=1 statement');
        rotationZ = 0;
        dragon.style.webkitTransform = 'rotateZ(0deg)';
        rate_dragon = 0.5;
        imgAtt = dragon.getAttribute('src');
        dragon.addEventListener('click', dragon_trigger, false);
        return rotationZ;
      }

      function reset_spin() {
        clearInterval(storedIntervalDragon);
        console.log('reached if opactiy=1 statement');
        dragon.style.webkitTransform = 'rotateZ(0deg)';
        rotationZ = 0;
        rotationY = 0;
        rate_dragon = 0.5;
        return dragon.addEventListener('click', dragon_trigger, false);
      }

      /* else */ // {
      clearInterval(storedIntervalDragon);
      rotationZ += 40;
      rotationY += 2.5;
      rate_dragon += 0.09;
      storedIntervalDragon = setInterval(timer_dragon, rate_dragon);
      console.log(`chaining z (rotationZ):      ${rotationZ}`);
      // }
      // adding the image mid turn so it the loading of img is not noticable.
      // THIS SHOULD BE CHANGED TO HAVE ALL IMAGES PRELOADED, AND SIMPLY ALTERANTE CSS OPACITY LEVELS.
      if (rotationZ > 1700 && imgAtt == dragonA) {
        dragon.setAttribute('src', dragonC);
        dragon.addEventListener('load', kill_spin, false);
      }

      if (rotationZ > 1700 && imgAtt == dragonC) {
        dragon.setAttribute('src', dragonB);
        dragon.addEventListener('load', kill_spin, false);
      }

      if (rotationZ > 1700 && imgAtt == dragonB) {
        dragon.setAttribute('src', dragonA);
        dragon.addEventListener('load', reset_spin, false);
      }
    }
  }
  useEffect(() => {
    loadScripts();
  });

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
                <div id="dragonOuter"><img id="dragon2" src={dragonGraphic} alt="drgaon" width="630" height="630" /></div>
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
