import React, { useEffect } from 'react';
import TerminalAnimated from './TerminalAnimated';
import { Container, Row, Col } from 'reactstrap';
import castleCopy from '../../images/castle copy.png';
import dragonGraphic from '../../images/dragonGraphic.png';
import inventory from '../../images/inventory.png';

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  function loadMap(prevProps) {
        var body = document.body; // For Chrome, Safari and Opera
        var opacity_total = 0;
        var margin_total = 0;
        var blur_total = 10;
        var savetime;
        var toggle = false;
        var a = 0;
        var stored_interval;
        var stored_interval_inv;
        var stored_interval_dragon;
        var stored_interval_white;
        var stored_interval_sky;
        var rate = 50;
        var rateType = 20;
        var rate_inv = 12;
        var period_test;
        var x;
        //grab the inventory from the html, then grab the text, assign a click event with display none/block. nice inventory display effect.
        var box_ul_two = document.getElementById('boxB').getElementsByTagName('ul')[0];
        //now assign the click event to the inventory text.
        var box_ul = document.getElementById('inv');
        box_ul.addEventListener('click', toggleDisplay, false);
        //there should also be another interval type effect for changing the opacity
        function toggleDisplay() {
          if (!toggle) {
            //toggle starts off false for no inventory
            stored_interval_inv = setInterval(timer_inv, rate_inv);
            toggle = true;
            margin_total = document.body.clientWidth / 2;
            //this is used to get the position for the inventory iin the center starting at toggle
            //need to set heights:
          } else {
            toggle = false;
            //now toggle will be false
            box_ul_two.style.display = "none";
            //  rememeber to reenable in css the display none in boxB
            clearInterval(stored_interval_inv);
            opacity_total = 0;
            //get the width of the body, and place box at the center
            margin_total = document.body.clientWidth / 2;
          }

          function timer_inv() {
            var marginZeroTestOne = 0;
            box_ul_two.style.opacity = opacity_total;
            box_ul_two.style.WebkitFilter = "blur(" + blur_total + "px)";
            //prevent inventory list margin from falling off page keep at 0, for side.
            marginZeroTestOne = box_ul_two.style.marginLeft;
            if (margin_total >= 0 || marginZeroTestOne === "") {
              box_ul_two.style.marginLeft = margin_total + "px";
            }

            box_ul_two.style.display = "block";

            var marginZeroTest = box_ul_two.style.marginLeft;
            if (opacity_total > 1 && margin_total <= 0 || toggle && margin_total <= 0) {
              clearInterval(stored_interval_inv);
              box_ul_two.style.marginLeft = "0%";
              console.log('reached if margin_total < 0');
              box_ul_two.style.opacity = 1;
              box_ul_two.style.WebkitFilter = "blur(0px)";
              blur_total = 10;
            } else {
              opacity_total += .01;
              blur_total -= .30;
              margin_total -= 12;
            }
          }
        }

        var c = 0;
        var d = 0;
        var counter = 0;
        var sky_rate = 0.05;
        var rotation = 90;
        var skyBool = true;
        //sky_trigger(sky_rate);
        function sky_trigger(sky_rate) {
          stored_interval_sky = setInterval(sky_timer, sky_rate);
        }
        function sky_timer() {
          //what needs to happen here is there should be a mechanism that allow for the incrimentation of the div number, so once you are done rotating
          //move on the next div
          if (counter == 32) {
            clearInterval(stored_interval_sky);
            skyBool = false;
            rotation = 180;
            counter = 0;
            d = 0;
            c = 0;
            return skyBool;
          }

          if (skyBool) {
            var skyBlock = document.getElementById("landscape").getElementsByClassName("layer")[c].getElementsByTagName("div")[d];
            if (skyBool == true) {
              skyBlock.style.webkitTransform = "rotateY(" + rotation + "deg)";
              skyBlock.style.transform = "rotateY(" + rotation + "deg)";
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
            return;
          }
        }
        sky_trigger(sky_rate);

        //this section will use javascript to make sure that the dragon img is located at the center of the land div.
        //this will work with this equation:   dragon_margin_top=420px-(Hieght of dragon)/2
        //event is load of site and upon body width change, or window resize event if it already exists?
        /***/
      }
/* 2 */
        $(window).on('load', function () {
          var stored_interval_dragon;
          var clickedSelect = false;
          window.onload = adjustHeight();
          window.addEventListener('resize', adjustHeight, false);
          function adjustHeight() {
            var bodyWidth = $("body").width();
            var divArray = $(".layer").find("div");
            divArray.each(function () {
              var divWidth = $(this).width();
              $(this).height(bodyWidth * .12);
            });
            //take height of castle A and height of landscape, subtract. m
            //make the differece the margin top of the of castle A
            //this adjust height will be called also when sky has finished loading.
            //because there is no height to refernce before sky is function completes.
            //4*12.5%width of body is the projected height of landscape.
            //use that number to set the margin top for the castleA
            var castleAHeight = $(".castleA").height();
            var marginTopCastleA = bodyWidth * 0.48 - castleAHeight;
            $(".castleA").css("margin-top", marginTopCastleA);
            //adjust area of dragon height to match the sky height
            $("#land").height(bodyWidth * 0.48);
            $("#lava").height(bodyWidth * 0.48);
            //adjust height for divs in column in land
            var landHeight = $("#land").outerHeight();
            var dragonHeight = $("#dragonOuter").height();
            var landTotPadd = landHeight - dragonHeight;
            //getting total land padding dividing by half, adding to land top padding, to push dragon to center.
            var halfLand = landTotPadd / 2;
            $("#land").css("padding-top", halfLand);
            var marginTopInvA = $("#challengeHeader2").height() + $("#boxA").height();
            marginTopInvA = "-" + marginTopInvA;
            //set height for inventory:
            $("#boxB").css("marginTop", marginTopInvA + "px");
            $("#Champion").css("padding-bottom", $("#lava").height() * .65 + "px");
            var boxThree = document.getElementById('castle');
            var addThree = boxThree.style.marginBottom;
            console.log("calling adjustHeight");
            //if lava foreground is longer than boxB then make boxB height that of lava
            //if boxB longer than lava foreground make lava height of boxB
          }
          window.onload=fixHeights();
          window.addEventListener('resize', fixHeights, false);
          function fixHeights() {
            var boxBHeightTest = $("#boxB").height();
            if (boxBHeightTest <= 0) {
              $("#boxB ul").css("opacity", "0");
              $("#boxB ul").css("display", "block");
            }
            var lavaForeground = $("#challengeHeader2").height() + $("#Champion_box").height();
            var lavaForegroundLava = $("#challengeHeader2").height() + $("#lava").height();
            var boxBHeight = $("#boxB").height();

            if (lavaForeground < lavaForegroundLava && lavaForegroundLava > boxBHeight) {
              $("#boxB ul").height(lavaForegroundLava);
              //make lava taller by adding the difference between the parts and making that difference
            } else if (lavaForeground > boxBHeight) {
              $("#boxB ul").height(lavaForeground);
              //make lava taller by adding the difference between the parts and making that difference
            } else {

              $("#Champion").css("padding-bottom", "0px");
              var boxAandHeader = $("#challengeHeader2").height() + $("#boxA").height();
              //make the bottom exten. champion height should be added diffe
              var neededAddHeight = boxBHeight - boxAandHeader; //make this the height of chamion
              $("#Champion").height(neededAddHeight);
            }
          }

          var fixToggleBool = false;
          $("#inv").click(fixToggleHeight);
          function fixToggleHeight() {
            if (!fixToggleBool) {
              fixToggleBool = true;
              console.log("fixToggleBool status:" + fixToggleBool);
              var boxBHeightTest = $("#boxB").height();
              if (boxBHeightTest <= 0) {
                $("#boxB ul").css("opacity", "0");
                $("#boxB ul").css("display", "block");
              }
              var lavaForeground = $("#challengeHeader2").height() + $("#Champion_box").height();
              var lavaForegroundLava = $("#challengeHeader2").height() + $("#lava").height();
              var boxBHeight = $("#boxB").height();
              if (lavaForeground < lavaForegroundLava && lavaForegroundLava > boxBHeight) {
                $("#boxB ul").height(lavaForegroundLava);
                //make lava taller by adding the difference between the parts and making that difference
              } else if (lavaForeground > boxBHeight) {
                $("#boxB ul").height(lavaForeground);
                var boxAandHeader = $("#challengeHeader2").height() + $("#boxA").height();
                //make the bottom exten. champion height should be added diffe

                boxBHeight = $("#boxB").height();
                var neededAddHeight = boxBHeight - boxAandHeader; //make this the height of chamion
                $("#Champion").height(neededAddHeight);
                //make lava taller by adding the difference between the parts and making that difference
              } else {
                $("#Champion").css("padding-bottom", "0px");
                var boxAandHeader = $("#challengeHeader2").height() + $("#boxA").height();
                boxBHeight = $("#boxB").height();
                //make the bottom exten. champion height should be added diffe
                var neededAddHeight = boxBHeight - boxAandHeader; //make this the height of chamion
                $("#Champion").height(neededAddHeight);
              }
            } else {
              $("#Champion").css("padding-bottom", $("#lava").height() * .65 + "px");
              fixToggleBool = false;
              $("#Champion").height(0);
              console.log("fixToggleBool status:" + fixToggleBool);
            }
          }

          var dragon_spun = false;
          var rate_dragon = 5;
          //sky related javascript has been moved to effect.js jquery file
          var dragonOut = document.getElementById('dragonOuter');
          var dragon = document.getElementById('dragon2');
          var imgAtt = dragon.getAttribute('src');
          var rotationZ = 0;
          var rotationY = 0;
          dragon.addEventListener('click', dragon_trigger, false);
          function dragon_trigger() {
            timer_dragon();
          }
          function timer_dragon() {
            dragon.removeEventListener('click', dragon_trigger, false);
            dragon.style.webkitTransform = "rotateZ(" + rotationZ + "deg)";
            // dragonOut.style.webkitTransform = ("rotateY(" + rotationY + "deg)");
            // dragonOut.style.transform = ("rotateY(" + rotationY + "deg)");

            dragon.style.transform = "rotateZ(" + rotationZ + "deg)";
            function kill_spin() {
              clearInterval(stored_interval_dragon);
              console.log('reached if opactiy=1 statement');
              rotationZ = 0;
              dragon.style.webkitTransform = "rotateZ(0deg)";
              RotationY = 0;
              rate_dragon = 0.5;
              imgAtt = dragon.getAttribute('src');
              dragon.addEventListener('click', dragon_trigger, false);
              return rotationZ;
            }

            function reset_spin() {
              clearInterval(stored_interval_dragon);
              console.log('reached if opactiy=1 statement');
              dragon.style.webkitTransform = "rotateZ(0deg)";
              rotationZ = 0;
              rotationY = 0;
              rate_dragon = 0.5;
              return dragon.addEventListener('click', dragon_trigger, false);
            }

            /* else*/ // {
            clearInterval(stored_interval_dragon);
            rotationZ += 40;
            rotationY += 2.5;
            rate_dragon += 0.09;
            stored_interval_dragon = setInterval(timer_dragon, rate_dragon);
            console.log('chaining z (rotationZ):      ' + rotationZ);
            // }
            //adding the image mid turn so it the loading of img is not noticable.
            //THIS SHOULD BE CHANGED TO HAVE ALL IMAGES PRELOADED, AND SIMPLY ALTERANTE CSS OPACITY LEVELS.
            if (rotationZ > 1700 && imgAtt == "/portfolio-react/images/dragonGraphic.png") {
              dragon.setAttribute('src', "/portfolio-react/images/dragonsGraphic2.png");
              dragon.addEventListener("load", kill_spin, false);
            }

            if (rotationZ > 1700 && imgAtt == "/portfolio-react/images/dragonsGraphic2.png") {
              dragon.setAttribute('src', "/portfolio-react/images/dragonGraphic3.png");
              dragon.addEventListener("load", kill_spin, false);
            }

            if (rotationZ > 1700 && imgAtt == "/portfolio-react/images/dragonGraphic3.png") {
              dragon.setAttribute('src', "/portfolio-react/images/dragonGraphic.png");
              dragon.addEventListener("load", reset_spin, false);
            }
          }
        });

  useEffect(() => {
    loadMap();
  });
    const terminalMessage = "Hello, I am a web developer and software developer. I love learning and using programming languages, creating memorable designs, and trying fancy-shmancy coffee. If you have front end or back end work I would like to help you... ";
  return (

    <div>
      <Container>
        <TerminalAnimated  terminalText= { terminalMessage } />
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
                </div>
              </div>
              <div alt="Brand" id="thedesignSec" />
            </div>
          </div>
        </div>
     <div class="foot"> <p>Thank you for visiting!</p></div>
      </Container>
    </div>
  );
};
export default Home;
