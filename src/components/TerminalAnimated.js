
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const TerminalAnimated = (props) => {
  const { terminalText } = props;
  function terminalAnimation() {
    //var textString = "Hello, I am a web developer and software developer. I love learning and using programming languages, creating memorable designs, and trying fancy-shmancy coffee. If you have front end or back end work I would like to help you... ";
    var textString = terminalText;
    var textSplitArr = textString.split('');
    var oneCharacter = "";
    var textArray = document.getElementsByTagName("textarea");
    var characterIterator = 0;
    var storedInterval;
    var rate = 50;
    var rateType = 20;
    var rate_inv = 12;
    var periodTest;
    var x;

    function timer() {
      oneCharacter = textSplitArr[characterIterator];
      periodTest = false;
      //print to text area
      textArray[0].innerHTML += "" + oneCharacter;
      //simulate a long pause when typing
      if (oneCharacter === '.') {
        periodTest = true;
        x = 600;
        clearInterval(storedInterval);
        storedInterval = setInterval(timer, x);
        characterIterator += 1;
        return x;
      }

      //simulate a short pause when typing
      if (oneCharacter === ',') {
        periodTest = true;
        x = 200;
        clearInterval(storedInterval);
        storedInterval = setInterval(timer, x);
        characterIterator += 1;
        return x;
        //you are returning x to make sure that the new value still exists in the next time interval function call!!
      }

      if ((x === 600 || x === 200) && periodTest === false) {
        rate = 50;
        clearInterval(storedInterval);
        x = 0;
        storedInterval = setInterval(timer, rateType);
      }
      characterIterator += 1;
      if (characterIterator > textSplitArr.length - 2) {
        clearInterval(storedInterval);
      }
    }
    function typeTrigger(rate) {
      storedInterval = setInterval(timer, rateType);
    }
    typeTrigger(rateType);
  }
  useEffect(() => {
    terminalAnimation();
  });
  return (
            <div class="row">
              <Col md="12">
                <div id="terminal">
                  <textarea spellcheck="false" autofocus>
                  </textarea>
                  <div class="tab4"></div>
                </div>
              </Col>
            </div>
  );
};

TerminalAnimated.propTypes = {
  terminalText: PropTypes.string.isRequired,
};
export default TerminalAnimated;
