

//Variable which stores the score and stores the functions which add or subtract points to the scoreboard. Starts at 0 and increases/decreases depending on function conditions below.
var points = {
  pointCounter: 0,
  addPoint: function(num) {
    this.pointCounter += num;
    $('#point-value').text(this.pointCounter);
    return;
    },

  subPoint: function(num) {
    this.pointCounter -= num;
    $('#point-value').text(this.pointCounter);
    return;
  }
  
}

//Variable which stores the level and stores the functions to increase the level on the scoreboard. Starts at Level 1 and increase by 1 depending on nextLevel function conditions below
var level = {
  levelCounter: 1,
  addLevel: function(num) {
    this.levelCounter += num;
    $('#level-value').text(this.levelCounter);
    return;
  }
}

//Variable which stores an array of the succulents that have been appended to the page
var succulents = [];

//Variable that stores the timestamp when the game is started
var start = new Date();

//Function to get random min and max for succulents x-axis drop location
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Before game starts hide all game elements below
$('#background').hide();
$('.title').hide();
$('.game-container').hide();
$('.scoreboard').hide();
$('.results').hide();
$('.gameover').hide();

//Event listener to call function after "Start Game" button is clicked
$(".start-game").click(startGame);


//Master function which starts the game
function startGame() {
  $('#background2').hide();
  $('#background').show();
  $('.title').show();
  $('.game-container').show();
  $('.scoreboard').show();
  $('.instructions').hide();
  $('#instructionsBorder').hide();

//Loop which releases 8 flowers at a time but continously loops since variable is defined outside
  var num = 8;
    while (num > 0) {
    makeSucculent();
    num--;

//Second Timer Function which runs every second    
    setInterval(function() {
    $('#timer').text(Math.round((new Date - start) / 1000, 0));
    }, 1000);
   }  
}


//Function to check how many points player has collected and increase levels per conditions below
function nextLevel() {
  if (level.levelCounter < 2 && points.pointCounter >= 15) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in one"><p>Level:<br> 2</p></div></div>');
  }
  else if (level.levelCounter < 3 && points.pointCounter >= 30) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in one"><p>Level:<br> 3</p></div></div>');
  } 
  else if (level.levelCounter < 4 && points.pointCounter >= 45) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in one"><p>Level:<br> 4</p></div></div>');
  } 
  else if (level.levelCounter < 5 && points.pointCounter >= 60) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in one"><p>Level:<br> 5</p></div></div>');
  } 
  else if (level.levelCounter < 6 && points.pointCounter >= 75) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in one"><p>Level:<br> 6</p></div></div>');
  } 
  else if (points.pointCounter < 0) {
    $('.gameover').show();
    $('.game-container').hide();
    $('.scoreboard').hide();
    $('.title').hide();
  }
  else {
  }
}

//Function to increase levels 
function newSucculents() {
  if (points.pointCounter < 30 && points.pointCounter > 15) {
    makeSucculentLevel2 ();
  }
  else if (points.pointCounter < 45 && points.pointCounter > 30) {
    makeSucculentLevel3 ();
  }
  else if (points.pointCounter < 60 && points.pointCounter > 45) {
    makeSucculentLevel4 ();
  }
  else if (points.pointCounter < 75 && points.pointCounter > 60) {
    makeSucculentLevel5 ();
  }
  else if (points.pointCounter < 0) {
    $('.gameover').show();
    $('.game-container').hide();
    $('.scoreboard').hide();
    $('.title').hide();
    $('#levelResults').text(level.levelCounter);
  }
  else {
  }
}

//Function to display results once highest level is met
function displayResults() {
  if (level.levelCounter > 5 && points.pointCounter >=75) {
    $('.results').show();
    $('#timerResults').text($('#timer').text());
    $('#pointsResults').text(points.pointCounter);
    $('.game-container').hide();
    $('.scoreboard').hide();
    $('.title').hide();
  }
  else {

  }
}

//master function to create succulents, call functions defined above
function makeSucculent() {

  //add succulents to game container
  var succulentParadise = $("<img class='paradise'>");
  succulentParadise.prop("src", "images/0012.png");
  succulents.push(succulentParadise);
  $(".game-container").append(succulentParadise);

  //sets succulent drop speed at random since these flowers fall throughout the game
  var speed = getRandomInt(5000, 10000);

  //set succulent drops on x-axis referencing getRandomInt function
  var xPos = getRandomInt(0, 500);
  succulentParadise.css("left", xPos + "px");
  succulentParadise.css("top", "-30px");
  
  //drop flowers from top to 630px at speed defined, using the swing animation
  succulentParadise.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  //listen to clicks and remove flower divs once clicked by user
  succulentParadise.click(succulentClick);
  
  function succulentClick() {
    $(this).remove();
    //add a point once clicked
    points.addPoint(1);
    //check the conditions to display level name
    nextLevel();
     //check the conditions to create succulents of different levels
    newSucculents();
    //check the conditions to display results
    displayResults();
  }  
} 

//need to refactor code after assignment to try and create below functions as one constructor
function makeSucculentLevel2 () {
  var succulentParadise2 = $("<img class='paradise'>");
  succulentParadise2.prop("src", "images/0028.png");
  $(".game-container").append(succulentParadise2);
  
  var xPos = getRandomInt(0, 480);
  succulentParadise2.css("left", xPos + "px");
  succulentParadise2.css("top", "0px");
  
  var speed = 8000;

  succulentParadise2.animate({"top": "630px"}, speed, "swing", makeSucculent);

  succulentParadise2.click(succulentClick);
  
  function succulentClick() {
  $(this).remove();
  points.addPoint(1);
  }  
}  

function makeSucculentLevel3 () {
  var succulentParadise3 = $("<img class='paradise'>");
  succulentParadise3.prop("src", "images/0017.png");
  $(".game-container").append(succulentParadise3);
  
  var xPos = getRandomInt(0, 480);
  succulentParadise3.css("left", xPos + "px");
  succulentParadise3.css("top", "10px");
  
  var speed = 7000;

  succulentParadise3.animate({"top": "630px"}, speed, "swing", makeSucculent);

  succulentParadise3.click(succulentClick);
  
  function succulentClick() {
  $(this).remove();
  points.addPoint(2);
  }  
}  

function makeSucculentLevel4 () {
  var succulentParadise4 = $("<img class='paradise'>");
  succulentParadise4.prop("src", "images/0015.png");
  $(".game-container").append(succulentParadise4);

  var xPos = getRandomInt(0, 480);
  succulentParadise4.css("left", xPos + "px");
  succulentParadise4.css("top", "20px");

  var speed = 6000;

  succulentParadise4.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  succulentParadise4.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  points.addPoint(3);

  }  
}  

  function makeSucculentLevel5 () {
  var succulentParadise5 = $("<img class='paradise'>");
  succulentParadise5.prop("src", "images/0027.png");
  $(".game-container").append(succulentParadise5);

  var xPos = getRandomInt(0, 480);
  succulentParadise5.css("left", xPos + "px");
  succulentParadise5.css("top", "30px");

  var speed = 5000;
  
  succulentParadise5.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  succulentParadise5.click(succulentClick);
  function succulentClick() {
  $(this).remove();
  points.addPoint(5);
  }  
}  

//function to check the location of the succulents and if they are below the game container
function findLocation(bottomLine) {
  for (flow in succulents) {
    var el = succulents[flow];
    var edge = $(el).position().top;
    if (edge > bottomLine) {
      console.log('one got away');
      // addPoint(1);
      points.subPoint(1);
      $(el).remove();
    }
  }
}

//global window.setInterval
setInterval(function(event) {
  var topOf = $('.game-container').position().top;
  var height = $('.game-container').height();
  var bottomLine = topOf + height;
  console.log('found location');
  findLocation(bottomLine);
  newSucculents()

}, 1000);


//function found online to make it so scrolling on iphone doesnt work
document.ontouchmove = function (e) {
  e.preventDefault();
}


