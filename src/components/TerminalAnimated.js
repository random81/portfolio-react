import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

const TerminalAnimated = (props) => {
  const { terminalText } = props;
  // const [unmounted, setUnmounted] = useState(false);
  // check unmounted (not a local var) component for the next evaluation of async response
  const refUnmounted = useRef(false);
  const textSplitArr = useRef('');

  function cleanUp(storedInterval) {
    clearInterval(storedInterval);
  }
  function terminalAnimation() {
    // side effect here is the changing of the DOM
    // we might be able to evaluate refUnmounted by setting it true, so that if it runs again on update, and evaluates to true
    // clean up the async processes? or prevent animation function from coninueing.
    const textString = terminalText;
    textSplitArr.current = textString.split('');
    let oneCharacter = '';
    const textArray = document.getElementsByTagName('textarea');
    textArray[0].innerHTML = '';
    // async from previous
    // destroy the text area
    // recreate the text area by appending to tmerinal
    let characterIterator = 0;
    let storedInterval;
    let rate = 50;
    const rateType = 20;
    const rateInv = 12;
    let periodTest;
    let x;

    if (refUnmounted.current) {
      // check on unmount and initial
      // already mounted clean up stuff
      //textArray[0].innerHTML = '';
      clearInterval(storedInterval);
      //textSplitArr.current = '';
    }

    function timer() {
      oneCharacter = textSplitArr.current[characterIterator];
      periodTest = false;
      // print to text area
      if (oneCharacter) {
        textArray[0].innerHTML += `${oneCharacter}`;
      }
      // simulate a long pause when typing
      if (oneCharacter === '.') {
        periodTest = true;
        x = 600;
        clearInterval(storedInterval);
        storedInterval = setInterval(timer, x);
        characterIterator += 1;
        return x;
      }

      // simulate a short pause when typing
      if (oneCharacter === ',') {
        periodTest = true;
        x = 200;
        clearInterval(storedInterval);
        storedInterval = setInterval(timer, x);
        characterIterator += 1;
        return x;
        // you are returning x to make sure that the new value still exists in the next time interval function call!!
      }

      if ((x === 600 || x === 200) && periodTest === false) {
        //rate = 50;
        clearInterval(storedInterval);
        x = 0;
        storedInterval = setInterval(timer, rateType);
      }
      characterIterator += 1;
      if (characterIterator > textSplitArr.current.length - 2) {
        clearInterval(storedInterval);
      }
    }
    function typeTrigger() {
      storedInterval = setInterval(timer, rateType);
    }
    typeTrigger(rateType);
  }
  /*
  For example, with the empty array of dependency, the returned
  function will be called after component unmounts. It's like that :
  useEffect(() => { return fnc_cleanUp; // fnc_cleanUp will cancel
  all subscriptions and asynchronous tasks (ex. : clearInterval) }, []);
  */
  useEffect(() => {
    terminalAnimation();
  }, []);

  useEffect(() => {
    if (!refUnmounted.current) {
      return () => { // Unmounted
        refUnmounted.current = true;
        textSplitArr.current='';
        console.log(refUnmounted);
      };
    }
  }, [refUnmounted, textSplitArr]);

  return (
    <div class="row">
      <Col md="12">
        <div id="terminal">
          <textarea spellCheck="false" autoFocus>
          </textarea>
          <div class="tab4"/>
        </div>
      </Col>
    </div>
  );
};

TerminalAnimated.propTypes = {
  terminalText: PropTypes.string.isRequired,
};
export default TerminalAnimated;
