/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var paragraph = "";
//  dragon_location();
var body = document.body; // For Chrome, Safari and Opera
var opacity_total = 0;
var margin_total = 0;
var blur_total = 10;
var savetime;
var toggle = false;
var text_string = "Hello, I am a web developer and software developer. I love learning and using programming languages, creating memorable designs, and trying fancy-shmancy coffee. If you have front end or back end work I would like to help you... ";
var text_split_arr = text_string.split('');
var one_character = "";
var text_array = document.getElementsByTagName("textarea");
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

function type_trigger(rate) {
    stored_interval = setInterval(timer, rateType);
}
function timer() {
    one_character = text_split_arr[a];
    period_test = false;
    text_array[0].innerHTML += "" + one_character;
    if (one_character == '.') {
        period_test = true;
        x = 600;
        clearInterval(stored_interval);
        stored_interval = setInterval(timer, x);
        a++;
        return x;
    }

    if (one_character == ',') {
        period_test = true;
        x = 200;
        clearInterval(stored_interval);
        stored_interval = setInterval(timer, x);
        a++;
        return x;
        //you are returning x to make sure that the new value still exists in the next time interval function call!!
    }

    if ((x == 600 || x == 200) && period_test == false) {
        rate = 50;
        clearInterval(stored_interval);
        x = 0;
        stored_interval = setInterval(timer, rateType);
    }
    a++;
    if (a > text_split_arr.length - 2) {
        clearInterval(stored_interval);
    }
}
type_trigger(rateType);
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
/* DRAGON SPIN CODE IN THIS COMMENTED SECTION HAS BEEN MOVED TO JQUERY FILE 

var dragon_spun=false;
var rate_dragon=5;
//sky related javascript has been moved to effect.js jquery file
var dragonOut=document.getElementById('dragonOuter');
var dragon=document.getElementById('dragon2');
imgAtt=dragon.getAttribute('src');
var rotationZ=0;
var rotationY=0;
dragon.addEventListener('click',dragon_trigger,false);
function dragon_trigger() {
    timer_dragon();
}
function timer_dragon () {
    dragon.removeEventListener('click',dragon_trigger,false);
    dragon.style.webkitTransform = ("rotateZ(" + rotationZ + "deg)");
   // dragonOut.style.webkitTransform = ("rotateY(" + rotationY + "deg)");
   // dragonOut.style.transform = ("rotateY(" + rotationY + "deg)");

   dragon.style.transform = ("rotateZ(" + rotationZ + "deg)");
   function kill_spin (){
    clearInterval(stored_interval_dragon);
    console.log('reached if opactiy=1 statement');
    rotationZ=0;
    dragon.style.webkitTransform = ("rotateZ(0deg)");
    RotationY=0;
    rate_dragon=0.5;
    imgAtt=dragon.getAttribute('src');
    dragon.addEventListener('click',dragon_trigger,false);
    return rotationZ;

}

function reset_spin (){
    clearInterval(stored_interval_dragon);
    console.log('reached if opactiy=1 statement');
    dragon.style.webkitTransform = ("rotateZ(0deg)");
    rotationZ=0;
    rotationY=0;
    rate_dragon=0.5;
    return dragon.addEventListener('click',dragon_trigger,false);
}



   // else/// {
    clearInterval(stored_interval_dragon);
    rotationZ += 40;
    rotationY += 2.5;
    rate_dragon+=0.09;
    stored_interval_dragon = setInterval(timer_dragon, rate_dragon);
    console.log('chaining z:      '+rotationZ);
   // }
//adding the image mid turn so it the loading of img is not noticable.
if ((rotationZ>1700)&&(imgAtt=="./images/might_Dragon4.png")){
 dragon.setAttribute('src', "./images/might_Dragon_dive2.png");
 dragon.addEventListener("load", kill_spin, false);
}

if ((rotationZ>1700)&&(imgAtt=="./images/might_Dragon_dive2.png")){
 dragon.setAttribute('src', "./images/might_Dragon5.png");
 dragon.addEventListener("load", kill_spin, false);
}

if ((rotationZ>1700)&&(imgAtt=="./images/might_Dragon5.png")){
 dragon.setAttribute('src', "./images/might_Dragon4.png");
 dragon.addEventListener("load", reset_spin, false);
}
}


*/

//this section will use javascript to make sure that the dragon img is located at the center of the land div.
//this will work with this equation:   dragon_margin_top=420px-(Hieght of dragon)/2
//event is load of site and upon body width change, or window resize event if it already exists?

var dragonImg = document.getElementById('dragon2');

//  dragonImg.onload=dragon_location();
//  dragon_loader_interval();
var stored_fix_dragon;
//  function dragon_loader_interval() {
//      stored_fix_dragon = setInterval(dragon_location, 1);
//  }
var dragonHalfHgt = 0;
var dragonMargin = 0;
var fixingLoad = true;
//  window.onload=dragon_location();
//  window.addEventListener('resize',dragon_location,false);
//this is the dragon relative height location as well as dragon size (i think) browser resize
//attempting to implement skyblock in jquery
//window.addEventListener('resize',skyblock_sizes,false);
//this is the skyblock divs relative height to browser resize 

/*
function dragon_location() {
    var dragonImg=document.getElementById('dragon2');
    var landElem=document.getElementById('land');
    dragonHalfHgt=dragonImg.offsetHeight/2;
    console.log(dragonHalfHgt+"    dragonhalf");
    if (dragonHalfHgt!==0){
        clearInterval(stored_fix_dragon);
    }
    dragonMargin=landElem.offsetHeight-dragonHalfHgt;
    dragonImg.style.marginTop=dragonMargin+"px";
    console.log("why arent you working?");
}
*/

//  dragon_location();
/*function skyblock_sizes() {
//get body width and adjust height of sky divs as percentile. note max and mins
    var bodyWidth=document.getElementsByTagName('body').width();
    //change to select ALL SKYBLOCK DIVS ''
    var skyBlockDivs = document.getElementById("landscape").getElementsByClassName("layer").getElementsByTagName("div");
    var changeHeight=bodyWidth*.10;
    var SkyDivHeight=skyBlockDivs.height(changeHeight);
    //it is probably neccessary to user array loop here to change height for all the divs
    skyBlockDivs.height(changeHeight);
    //change height based on width 
    console.log("This is the skyblock function working to fix height");
}
skyblock_sizes();
*/
/*
this is the time function variables and function for bootstrap version..
it had to be discontinued due to problems with implmentation
var c = 0;
var d=0;
var counter=0;
//counter is for number of divs we are rotating. so stop the sky_timer function at 32.
var sky_rate=0.05;
var rotation=90;
var skyBool=true;
sky_trigger(sky_rate);
function sky_trigger(sky_rate) {
    stored_interval_sky = setInterval(sky_timer, sky_rate);
}
function sky_timer () {
//what needs to happen here is there should be a mechanism that allow for the incrimentation of the div number, so once you are done rotating
//move on the next div
if (d == 4) {
//counter is for number of divs we are rotating. so stop the sky_timer function at 32.
clearInterval(stored_interval_sky);
skyBool = false;
//skybool false will end the function
rotation = 180;
counter = 0;
d = 0;
c = 0;
return skyBool;
//this ends the function
}

if (skyBool) {

//c is to select and increment the current 'layer' from the 'layer' array. 
//d is the div number in THE CURRENT ROW OF 8 DIVS WE ARE ROTATING. 
   // var layers = document.getElementsByClassName('layer');
   // var skyBlockLayer=layers[0];
   // var divSky=layers.childNodes[1];
   var skyBlock = document.getElementById("landscape").getElementsByClassName("row")[d].getElementsByClassName("layer")[c].getElementsByTagName("div")[0];
    //select skybock divs array in skyBlock variable
    if (skyBool == true) {
        skyBlock.style.webkitTransform = ("rotateY(" + rotation + "deg)");
        skyBlock.style.transform = ("rotateY(" + rotation + "deg)");
    }
    if ((rotation == 180) && (c !== 5)) {

        //this is for moving to next div!

    //if ((rotation == 180) && (d !== 7)) {
        rotation = 90;
        c++;
        //d++;
        counter += 1;
        return c;
        //return d;
    }

    if ((c % 5 == 0) && (rotation == 180)) {
    //if ((d % 7 == 0) && (d > 0) && (rotation == 180)) {

        //this is for moving to next row!
        rotation = 90;
        //c++;
        c = 0;
        d++;
        counter += 1;
        return d;
    }
    if (skyBool == true) {
        return rotation += 9;
    }
}
else{
    return
}
} //end sky_time function
*/

/***/ }),
/* 2 */
/***/ (function(module, exports) {

$(window).on('load', function () {
  //$(document).ready(function ($) {

  var stored_interval_dragon;
  //$(document).ready(function(){
  //    window.addEventListener('resize',skyblock_sizes,false);
  //this is the skyblock divs relative height to browser resize 
  var clickedSelect = false;
  /*$("nav"). click(changeCursor);
  function changeCursor(){
    if(clickedSelect===false){
        console.log("clicked!!!!!");
        $(this).css("background-color","blue");
            //$(this).parents(".row").siblings(".panel").find("iframe").css("cursor","crosshair");          
            var fuck=document.getElementsByTagName("iframe");   
            $(fuck).children();
            console.log(fuck);
  //            var fuck=$("iframe").contents().find('html').css("cursor","crosshair");         
  //change cursor hovering over iframe above this button to indicate selection mode, possibly with img
  clickedSelect=true;
  }
  else {
    console.log("clicked!!!!!");
  
    $(this).css("background-color","#F2F1F0");
  
    $(this).parent().css("background-color","#F2F1F0");
    clickedSelect=false;
  }
  }
  */

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
    //  var landscapeHeight=$("#landscape").height();
    //var marginTopCastleA=landscapeHeight-castleA;
    $(".castleA").css("margin-top", marginTopCastleA);
    //adjust area of dragon height to match the sky height
    $("#land").height(bodyWidth * 0.48);
    $("#lava").height(bodyWidth * 0.48);
    //adjust height for divs in column in land 
    var landHeight = $("#land").outerHeight();
    //  $("#land").find(".col-xs-12").find("div").height(rowHeight*.33);
    // $("#land").find(".col-xs-4").find("div").height(rowHeight*.33);
    var dragonHeight = $("#dragonOuter").height();
    var landTotPadd = landHeight - dragonHeight;
    //getting total land padding dividing by half, adding to land top padding, to push dragon to center.
    var halfLand = landTotPadd / 2;
    $("#land").css("padding-top", halfLand);
    var marginTopInvA = $("#challengeHeader2").height() + $("#boxA").height();
    marginTopInvA = "-" + marginTopInvA;
    //set height for inventory:
    $("#boxB").css("marginTop", marginTopInvA + "px");
    /* this is bad because list items longer then box $("#boxB ul").height($("#challengeHeader2").height()+ $("#lava").height());*/

    $("#Champion").css("padding-bottom", $("#lava").height() * .65 + "px");

    var boxThree = document.getElementById('castle');
    var addThree = boxThree.style.marginBottom;
    //$("#castle").css("margin-top", "6px");
    console.log("calling adjustHeight");
    //if lava foreground is longer than boxB then make boxB height that of lava
    //if boxB longer than lava foreground make lava height of boxB
  }
  window.onload=fixHeights();
  window.addEventListener('resize', fixHeights, false);
  //$("#boxA img").click(fixHeights);
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

  //  var stored_interval;
  //  var stored_interval_sky;
  //  var c = 0;
  //  var d=0;
  //  var counter=0;
  //counter is for number of divs we are rotating. so stop the sky_timer function at 32.
  //  var sky_rate=0.05;
  //   var rotation=90;
  //  var skyBool=true;
  //sky_trigger(sky_rate);
  //  function skyblock_sizes() {
  /*new implementation:
  make a loop that selects each individual div in the layer
  traverse to the column div that contains the div and get the width
  assign the width to the div contatined in layer. 
  */
  //get body width and adjust height of sky divs as percentile. note max and mins
  //  var DocWidth=$(document).width();
  //  var changeHeight=DocWidth*.10;
  //change to select ALL SKYBLOCK DIVS ''
  // you can only access jquery functions by aquriting jquery collection! use $() not javascipt 'get' 

  //     var colCollectionM=$('#landscape').find( ".col-md-2" ).width();
  //     var padding=$('#landscape').find( ".col-md-2" ).css('padding-left');
  //      colCollectionM+=15*2;//15px times two for col padding
  //problem here is we are getting a string for padding. we want it without the px
  //      var colCollectionX=$('#landscape').find( ".col-xs-3" ).width();
  //      colCollectionX+=15*2;//15px times two for col padding
  //grab the layers  inner divs and make them the width of the columns that contain them otherwise too small
  //     var rowCollection=$('#landscape').find( ".row" ).height(changeHeight);
  //     $('.layer').find( "div" ).height(changeHeight);
  //     var divArray=$(".layer").find( "div" );
  //     divArray.each(function() {
  //       var divParenWidth= $( this ).closest(".col-md-2").width();
  //     divParenWidth+=30;//add padding
  //     $(this).width(divParenWidth);
  //   });
  //   }

  //   var stored_interval_position;
  //   var ratePosition=50;
  //   var counterPosition;
  //   counterPosition=0;
  //kill after 10 fixes of position for certainty
  //  function position_trigger(ratePosition) {
  //    stored_interval_position = setInterval(positionCastle, ratePosition);
  //  }
  //window.onload=removeExtraLayer();
  //window.addEventListener('resize',removeExtraLayer,false);
  //   window.onload=positionCastle();
  //   window.addEventListener('resize',position_trigger,false);
  //call the posiition castle timer to make sure it updates, then kill the timer
  //   window.addEventListener('resize',positionCastle,false);
  //   positionCastle();
  //   function positionCastle(){
  //this will place castle at bottom of last row in sky section
  /*
  grab the castle lower edge position, subtract or add to make it flush with 
  row
   */
  //   var castleImg=$("#castle");
  //   var moveCastle = castleImg.height();
  //   var moveCastleNeg ="-"+moveCastle;
  //   var castleA=$(".castleA").height();
  //   var moveCastleNegNum =moveCastleNeg-castleA;
  //not using moveCAstleNegNum because it is taking all img for some reason at load
  //   $("#castle").css("margin-top",moveCastleNegNum);
  /*
   var castleImg=$("#castle");
   var castleHeight = castleImg.height();
   var headerHeight=$("header").height(); 
   var rowAftrHeader=$("#terminal").height();
   var landscapeHeight=$("#landscape").height();
  // var moveCastleNeg =landscapeHeight+castleHeight+headerHeight+rowAftrHeader;
  //subtract 1 to convert to a number from a string
  
  var moveCastleNegNum =moveCastleNeg-1;
  */
  //$("#castle").css("margin-top",castleHeight);
  //  console.log('changing the castle margin-top: '+ moveCastleNegNum);

  //change this to height of castle
  //this approach is incomplete because the columns move dynamically with bootstrap below the castle. 
  //correct approach should be height total of layers+castle height-(castle height)=move up
  //another solution would be to make the last two columnw in the last two rows display none. 
  //  counterPosition++;
  //  $("#castle").css("margin-top",moveCastleNegNum);
  //  if (counterPosition>25){
  //    clearInterval(stored_interval_position);
  //  }
  //  console.log('changing the castle margin-top: '+ moveCastleNegNum);
  //  }
  //  skyblock_sizes();

  var dragon_spun = false;
  var rate_dragon = 5;
  //sky related javascript has been moved to effect.js jquery file
  var dragonOut = document.getElementById('dragonOuter');
  var dragon = document.getElementById('dragon2');
  imgAtt = dragon.getAttribute('src');
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
    if (rotationZ > 1700 && imgAtt == "/introductions/images/dragonGraphic.png"){
      dragon.setAttribute('src', "/introductions/images/dragonsGraphic2.png");
      dragon.addEventListener("load", kill_spin, false);
    }

    if (rotationZ > 1700 && imgAtt == "/introductions/images/dragonsGraphic2.png") {
      dragon.setAttribute('src', "/introductions/images/dragonGraphic3.png");
      dragon.addEventListener("load", kill_spin, false);
    }

    if (rotationZ > 1700 && imgAtt == "/introductions/images/dragonGraphic3.png") {
      dragon.setAttribute('src', "/introductions/images/dragonGraphic.png");
      dragon.addEventListener("load", reset_spin, false);
    }
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);