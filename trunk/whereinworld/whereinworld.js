
// Object representing a Round in the game.

Round = function() {
  Round.constructor_.apply(this, arguments);
}

Round.constructor_ = function() {
  this.choices = [];
  this.correctAnswer = null;
  this.numChoices = null;
  this.geocoder = new google.maps.Geocoder();

  // Europe
  this.maxLat = 73.022592;
  this.maxLng = 35.859374;
  this.minLat = 36.315125;
  this.minLng = -31.640625;

  // Africa
  this.maxLat = 36.173357;
  this.maxLng = 50.449219;
  this.minLat = -37.857507;
  this.minLng = -26.191406;
/*
  // The Middle East and Central Asia
  this.maxLat = 48.806863;
  this.maxLng = 83.232422;
  this.minLat = 21.289374;
  this.minLng = 33.046875;

  // East Asia
  this.maxLat = 48.980217;
  this.maxLng = 142.119141;
  this.minLat = -10.83306;
  this.minLng = 87.451172;

  // Oceania
  this.maxLat = 21.043491;
  this.maxLng = 234.84375; // This exceeds 180 degrees, but represents a box
                           // which straddles the antimeridian.
  this.minLat = -50.736455;
  this.minLng = 142.954102;

  // The World
  this.maxLat = 70;
  this.maxLng = 180;
  this.minLat = -70;
  this.minLng = -180;
*/
}

Round.prototype.getChoice = function() {
  var latLng = new google.maps.LatLng(
    ((((Math.random() * (this.maxLat - this.minLat)) + this.minLat) + 180) % 360) - 180,
    ((((Math.random() * (this.maxLng - this.minLng)) + this.minLng) + 180) % 360) - 180 );
  var me = this;
  this.geocoder.geocode({latLng: latLng}, function(status, response) {me.addChoiceCallback(status, response)} );
}

Round.prototype.loadChoices = function(num) {
  this.choices = [];
  this.numChoices = num;
  this.correctAnswer = Math.floor(Math.random() * num);
  for (var i = 0; i < num; ++i) {
    this.getChoice();
  }
}

Round.prototype.addChoiceCallback = function(status, response) { 
  if (status != google.maps.GeocoderStatus.OK) {
    this.getChoice();
  } else if (response.results.length == 0) {
    this.getChoice();
  } else {
    var result = response.results[0];
    var country = null;
    for (var i = 0; i < result.address_components.length; i++) {
      var address_component = results.address_components[i];
      console.log(address_component);
      for (var j = 0; j < address_component.types.length; j++) {
        var type = address_component.types[j];
        console.log(type);
        if (type == "country") {
          alert("found country");
          country = address_component.long_name;
        }
      }
    }
    if (country) {
      console.log("Found a country");
      this.choices.push(new Choice(country, result.geometry.location));
    } else {
      this.getChoice();
    }
  }
}

Round.prototype.contains = function(place) {
  for (var i = 0; i < this.choices.length; ++i) {
    if (this.choices[i].name == place) {
      return true;
    }
  }
  return false;
}

Round.prototype.getLatLng = function() {
  return this.choices[this.correctAnswer].latlng;
}

Round.prototype.getCorrectLocationName = function() {
  return this.choices[this.correctAnswer].name;
}

Round.prototype.isCorrect = function(answer) {
  return answer == this.correctAnswer;
}

Round.prototype.isReady = function() {
  return this.choices.length == this.numChoices;
}

// Object representing a choice in a Round.

Choice = function() {
  Choice.constructor_.apply(this, arguments);
}

Choice.constructor_ = function(name, latlng) {
  this.name = name;
  this.latlng = latlng;
}

// Game parameters
var totalRounds = 20; // The total number of rounds in a game.
var bufferSize = 1; // How many rounds ahead we load the geocoded data.
var numChoices = 5; // The number of options in each round.
var delayBetweenRounds = 3000; // Amount of time (in ms) after answering before
                               // the next round begins.
var delayStartRetries = 100;   // Amount of time (in ms) waited before retrying
                               // to start a round (if there is a delay in the
                               // geocoding).
var answerStateZoom = 3; // The zoom level we zoom out to when showing the
                         // answer on the hybrid map.

// The difficulty levels - these are split evenly over the Rounds.
// Each entry specifies the zoom level which will be shown, a string describing
// the relative difficulty, and the number of points which is to be awarded for
// a correct answer at this difficulty level.
var levels = [
      { zoom: 4,
        difficulty: '<font color="green">Easy</font> (1 Point)',
        score: 1},
      { zoom: 5,
        difficulty: '<font color="blue">Moderate</font> (2 Points)',
        score: 2},
      { zoom: 6,
        difficulty: '<font color="yellow">Difficult</font> (3 Points)',
        score: 3},
      { zoom: 7,
        difficulty: '<font color="red">Crazy</font> (4 Points)',
        score: 4},
      { zoom: 9,
        difficulty: '<font color="purple">Holy Crap!</font> (5 Points)',
        score: 5}
                   ]

// Game state
var score = 0.0; // Current score of the player
var maxScore = 0.0; // The current maximum score possible.
var roundsPlayed = 0; // The number of rounds played so far.
var level = 0; // The current level of difficulty.
var currentRound = null; // The Round object containing the current state.
var countdown = 0; // The amount of time left before the next round begins.

var rounds = []; // Buffer of future rounds, allows us to prefetch geocodes.

// State accessor functions

levelZoom = function() {
  if (level < levels.length) {
    return levels[level].zoom;
  }
  return levels[0].zoom;
}

levelDifficulty = function() {
  if (level < levels.length) {
    return levels[level].difficulty;
  }
  return levels[0].difficulty;
}

levelScore = function() {
  if (level < levels.length) {
    return levels[level].score;
  }
  return levels[0].score;
}

// Functions for changing the game state.

submitAnswer = function(answer) {
  roundsPlayed += 1;
  maxScore += levels[level].score;

  setStatusToAnswerState();
  if (currentRound.isCorrect(answer)) {
    answerCorrect();
  } else {
    answerIncorrect();
  }
  updateScoreElement();
  removeIncorrectButtons();
  if (roundsPlayed < totalRounds) {
    nextRound();
  } else {
    finish();
  }
}

answerCorrect = function() {
  score += levelScore();
  setAnswerElement(true);
}

answerIncorrect = function() {
  setAnswerElement(false);
}

startRound = function() {
  if (!currentRound.isReady()) {
    setTimeout('startRound()', delayStartRetries);
    return;
  }
  centerMap();
  revealButtons();
}

nextRound = function() {
  level = Math.floor(roundsPlayed / totalRounds * levels.length);
  currentRound = rounds.shift();
  // TODO: don't add rounds that will never be played.
  var newRound = new Round();
  newRound.loadChoices(numChoices);
  rounds.push(newRound);
  countdown = Math.round(delayBetweenRounds / 1000);
  // If we're counting down less than three seconds, don't show a countdown
  // timer.
  if (countdown < 3) {
    countdown = 0;
  }
  setGetReadyMapState();
  setTimeout('startRound()', delayBetweenRounds);
}

finish = function() {
  setTimeout("askPlayAgain()", delayBetweenRounds);
}

initialiseRounds = function() {
  for (var i = 0; i < bufferSize; ++i) {
    var newRound = new Round();
    newRound.loadChoices(numChoices);
    rounds.push(newRound);
  }
}

initialiseState = function() {
  score = 0.0;
  roundsPlayed = 0;
  maxScore = 0.0;
  level = 0;
}


// DOM manipulation methods

setAnswerElement = function(correct) {
  if (correct) {
    document.getElementById("correct").innerHTML = '<font color="green">CORRECT</font>';
  } else {
    document.getElementById("correct").innerHTML = '<font color="red">INCORRECT</font>';
  }
}

updateScoreElement = function() {
  document.getElementById("score").innerHTML = 'Score: ' + score + ' / ' +
    maxScore + ' points (' + Math.floor((score / maxScore) * 100) + '%)';
}

centerMap = function() {
  resetMapState();
  var location = currentRound.getLatLng();
  map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
  map.setCenter(location);
  map.setZoom(levelZoom());
  marker.setPosition(location);
  marker.setMap(map);
  document.getElementById("difficulty").innerHTML = "Difficulty: " +
                                                    levelDifficulty();
}

setStatusToAnswerState = function() {
  map.setZoom(answerStateZoom);
  map.setMapTypeId(google.maps.MapTypeId.HYBRID);
  marker.setMap();
  infowindow.setPosition(currentRound.getLatLng());
  infowindow.setContent('<center><h2>' +
                         currentRound.getCorrectLocationName()
                         + '</h2></center>');
  infowindow.open(map);
  document.getElementById("status").innerHTML = '<br>';
}

removeIncorrectButtons = function() {
  buttonDiv = document.getElementById("buttons");
  var j = 0;
  for (var i = 0; i < currentRound.numChoices; ++i) {
    if (!currentRound.isCorrect(i)) {
      if (j < buttonDiv.childNodes.length) {
        buttonDiv.removeChild(buttonDiv.childNodes[j]);
      }
    } else {
      ++j;
    }
  }
}

removeButtons = function() {
  buttonDiv = document.getElementById("buttons");
  while (buttonDiv.childNodes.length > 0) {
    buttonDiv.removeChild(buttonDiv.childNodes[0]);
  }
}

revealButtons = function() {
  for (var i = 0; i < currentRound.choices.length; ++i) {
    var button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value",currentRound.choices[i].name);
    button.setAttribute("onClick","submitAnswer(" + i + ")");
    buttonDiv.appendChild(button);
  }
  document.getElementById("status").innerHTML = "Go!";
}

resetMapState = function() {
  removeButtons();
  document.getElementById("correct").innerHTML = "<br>";
  infowindow.hide();
}

setGetReadyMapState = function() {
  if (roundsPlayed == 0) {
    document.getElementById("status").innerHTML = "Buffering geocoding data...";
  } else if (countdown > 0) {
    document.getElementById("status").innerHTML = "Next round in " + countdown + " seconds...";
    countdown--;
    setTimeout('setGetReadyMapState()', 1000);
  }
}

askPlayAgain = function() {
  document.getElementById("status").innerHTML = "Would you like to play again?";
  removeButtons();
  var buttonDiv = document.getElementById("buttons");
  var button = document.createElement("input");
  button.setAttribute("type","button");
  button.setAttribute("value","Play Again?");
  button.setAttribute("onClick","initialise()");
  buttonDiv.appendChild(button);
}

initialise = function() {
  initialiseRounds();
  initialiseState();
  var options = {};
  options.mapTypeId = google.maps.MapTypeId.SATELLITE;
  options.center = new google.maps.LatLng(0.0, 0.0);
  options.zoom = 1;
  options.disableDefaultUI = true;
  map = new google.maps.Map(document.getElementById("map_canvas"), options);
  infowindow = new google.maps.InfoWindow();
  marker = new google.maps.Marker();

  nextRound();
}
