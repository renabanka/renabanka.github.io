//variable to add or subtract points to the scoreboard. Starts at 0 and increases/decreases depending on function conditions below.
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

//variable to increase the level on the scoreboard. Starts at Level 1 and increase by 1 depending on nextLevel function conditions below
var level = {
  levelCounter: 1,
  addLevel: function(num) {
    this.levelCounter += num;
    $('#level-value').text(this.levelCounter);
    return;
  }
};

//variable which stores an array of the succulents that have been appended to the page
var succulents = [];

//timer related variable
var start = new Date();

//function to get random min and max for succulents location drop and speed drop
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//before game starts hide all game elements
$('#background').hide();
$('.title').hide();
$('.game-container').hide();
$('.scoreboard').hide();
$('.results').hide();
$('.gameover').hide();

 //event listener to call function after "Start Game" button is clicked
$(".start-game").click(startGame);


//master function which starts the game
function startGame() {
  $('#background2').hide();
  $('#background').show();
  $('.title').show();
  $('.game-container').show();
  $('.scoreboard').show();
  $('.instructions').hide();
  $('#instructionsBorder').hide();

  var num = 8;
    while (num > 0) {
    makeSucculent();
    num--;

    setInterval(function() {
    $('#timer').text(Math.round((new Date - start) / 1000, 0));
    }, 1000);
   }  
}




//function to check how many points player has collected and increase levels per conditions below
 function nextLevel() {
  if (level.levelCounter < 2 && points.pointCounter >= 15) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in one"><p>Level:<br> 2</p></div></div>');

  }
  else if (level.levelCounter < 3 && points.pointCounter >= 30) {
    level.addLevel(1);
    $(".level-container").replaceWith('<div class="level-container"><div class="box fade-in two"><p>Level:<br> 3</p></div></div>');
 
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

//increase of levels 
 function newSucculents() {
  if (points.pointCounter < 30 && points.pointCounter > 15) {
    // startLevel2();
    makeSucculentLevel2 ();

  }

  else if (points.pointCounter < 45 && points.pointCounter > 30) {
    // makeSucculentLevel2 ();
    makeSucculentLevel3 ();
  }

  else if (points.pointCounter < 60 && points.pointCounter > 45) {
    // makeSucculentLevel2 ();
    // makeSucculentLevel3 ();
    makeSucculentLevel4 ();
  }

  else if (points.pointCounter < 75 && points.pointCounter > 60) {
    // makeSucculentLevel2 ();
    // makeSucculentLevel3 ();
    // makeSucculentLevel4 ();
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

//function to display results once highest level is met
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

  //set succulent drop speed referencing getRandomInt function
  var speed = getRandomInt(5000, 10000);
  
  //set succulent drops on x-axis referencing getRandomInt function
  var xPos = getRandomInt(0, 400);
  succulentParadise.css("left", xPos + "px");
  succulentParadise.css("top", "-30px");
  
  //drop succulents in a certain way
  succulentParadise.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  //listen to clicks and remove image once clicked by user
  succulentParadise.click(succulentClick);
  
  function succulentClick() {
    $(this).remove();
    //add a point once clicked
    points.addPoint(1);
    //check the conditions to display level name
    nextLevel();
     //check the conditions to create more succulents
    newSucculents();
    //check the conditions to display results
    displayResults();
  }  
} 


function makeSucculentLevel2 () {
  var succulentParadise2 = $("<img class='paradise'>");
  succulentParadise2.prop("src", "images/0028.png");
  $(".game-container").append(succulentParadise2);
  
  var xPos = getRandomInt(0, 400);
  succulentParadise2.css("left", xPos + "px");
  succulentParadise2.css("top", "0px");
  

  var speed = getRandomInt(6000, 10000);
  

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
  

  var xPos = getRandomInt(0, 400);
  succulentParadise3.css("left", xPos + "px");
  succulentParadise3.css("top", "10px");
  

  var speed = getRandomInt(7000, 10000);
  

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
  

  var xPos = getRandomInt(0, 400);
  succulentParadise4.css("left", xPos + "px");
  succulentParadise4.css("top", "20px");

  var speed = getRandomInt(8500, 10000);
  

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
  

  var xPos = getRandomInt(0, 400);
  succulentParadise5.css("left", xPos + "px");
  succulentParadise5.css("top", "30px");

  var speed = getRandomInt(9000, 10000);
  
  succulentParadise5.animate({"top": "630px"}, speed, "swing", makeSucculent);
  
  succulentParadise5.click(succulentClick);
  function succulentClick() {
  $(this).remove();

  points.addPoint(3);

    }  
    }  

//function to check the location of the succulents
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


