// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/google_maps_api_v3.js
// ==/ClosureCompiler==

/**
 * @name Map Of The Dead for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * A Zombie shooting game with google maps v3.
 */


/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * The Map Of The Dead Game
 *
 * @constructor
 * @param {Node} mapDiv The div to attach the map to.
 */
function MapOfTheDead(mapDiv) {
  this.mapDiv_ = mapDiv;

  this.zombies_ = [];

  this.createMap_();
  this.addKeyboardHandlers_();
  this.setupScreen_();
  this.setupIcons_();

}


/**
 * @type {number}
 * @private
 */
MapOfTheDead.prototype.GAME_TIME_ = 60;


/**
 * @type {number}
 * @private
 */
MapOfTheDead.prototype.ZOMBIE_ZINDEX_ = 1;


/**
 * @type {boolean}
 * @private
 */
MapOfTheDead.prototype.isPlaying_ = false;


/**
 * @type {number}
 * @private
 */
MapOfTheDead.prototype.currentScore_ = 0;


/**
 * Creates the Gogole Map
 *
 * @private
 */
MapOfTheDead.prototype.createMap_ = function() {
  this.map_ = new google.maps.Map(this.mapDiv_, {
    center: new google.maps.LatLng(34.0214, -118.286426),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false
  });
};


/**
 * Adds the keyboard listeners
 *
 * @private
 */
MapOfTheDead.prototype.addKeyboardHandlers_ = function() {
  var that = this;
  google.maps.event.addDomListener(document, 'keypress', function(e) {
    that.handleKeyPress_(e);
  });
  google.maps.event.addDomListener(document, 'keydown', function(e) {
    that.handleKeyPress_(e);
  });
  google.maps.event.addDomListener(document, 'keyup', function(e) {
    that.handleKeyPress_(e);
  });
};


/**
 * Handles key presses and does the right action
 *
 * @param {Event} e The event.
 * @private
 */
MapOfTheDead.prototype.handleKeyPress_ = function(e) {
  switch (e.keyCode) {
    case 32: // Space
      this.checkForZombieHit_();
      break;
    case 13: // Enter
      this.startGame_();
      break;
    case 38: // Up
      this.map_.panBy(0, -10);
      break;
    case 40: // Down
      this.map_.panBy(0, 10);
      break;
    case 37: // Left
      this.map_.panBy(-10, 0);
      break;
    case 39: // Right
      this.map_.panBy(10, 0);
      break;
  }
};


/**
 * Find the distance from one point to another
 *
 * @param {google.maps.LatLng} p1 The first point.
 * @param {google.maps.LatLng} p2 The second point.
 * @return {number} The distance between the points.
 * @private
 */
MapOfTheDead.prototype.distanceFrom_ = function(p1, p2) {
 var lat1 = p1.lat() * Math.PI / 180.0;
 var lat2 = p2.lat() * Math.PI / 180.0;
 var lngDiff = (p2.lng() - p1.lng()) * Math.PI / 180.0;
 var a = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) *
                   Math.cos(lat2) * Math.cos(lngDiff)) * 20902231.0029;
 return Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) *
                  Math.cos(lat2) * Math.cos(lngDiff)) * 20902231.0029;
};


/**
 * Check if a zombie has been hit and possibly spawn another one
 *
 * @private
 */
MapOfTheDead.prototype.checkForZombieHit_ = function() {
  if (!this.isPlaying_) {
    return;
  }

  var center = this.reticule_.getPosition();
  for (var i = 0, zombie; zombie = this.zombies_[i]; i++) {
    if (!zombie.isDead) {
      var dist = this.distanceFrom_(center, zombie.getPosition());
      if (dist < 150) {
        this.currentScore_++;
        this.setScore_(this.currentScore_);
        zombie.isDead = true;
        zombie.deadState = 1;
        if (this.currentScore_ % 2 == 0) {
          this.spawnZombie_();
        }
      }
    }
  }
};


/**
 * Add the title, score, time and instruction secions to the map
 *
 * @private
 */
MapOfTheDead.prototype.setupScreen_ = function() {
  var logoDiv = document.createElement('DIV');
  logoDiv.style.paddingTop = '5px';
  logoDiv.style.paddingLeft = '10px';
  logoDiv.innerHTML = '<img src="zombie_mapofthedead.png"/>';
  this.map_.controls[google.maps.ControlPosition.TOP_LEFT].push(logoDiv);

  this.controlsDiv_ = document.createElement('DIV');
  this.scoreDiv_ = document.createElement('DIV');
  this.scoreDiv_.style.width = '120px';
  this.scoreDiv_.style.paddingTop = '5px';

  this.timeDiv_ = document.createElement('DIV');
  this.timeDiv_.style.width = '120px';
  this.timeDiv_.style.paddingTop = '5px';

  this.controlsDiv_.innerHTML = 'Enter: new game. Space: shoot. Arrows: move';
  this.controlsDiv_.style.backgroundColor = 'rgba(210, 238, 191, 0.55)';
  this.controlsDiv_.style.border = '3px solid #8dbb78';
  this.controlsDiv_.style.color = '#8c0000';
  this.controlsDiv_.style.display = 'inline';
  this.controlsDiv_.style.fontWeight = 'bold';
  this.controlsDiv_.style.padding = '5px';
  this.controlsDiv_.style.marginBottom = '15px';

  this.map_.controls[google.maps.ControlPosition.BOTTOM].push(
      this.controlsDiv_);

  var img = document.createElement('IMG');
  img.src = 'zombie_score.png';

  this.scoreDiv_.appendChild(img);
  this.scoreSpan_ = document.createElement('SPAN');
  this.scoreDiv_.appendChild(this.scoreSpan_);

  this.scoreSpan_.style.backgroundColor = 'rgba(210, 238, 191, 0.55)';
  this.scoreSpan_.style.border = '3px solid #8dbb78';
  this.scoreSpan_.style.color = '#8c0000';
  this.scoreSpan_.style.borderLeft = '0';
  this.scoreSpan_.style.display = 'inline';
  this.scoreSpan_.style.fontWeight = 'bold';
  this.scoreSpan_.style.padding = '5px';
  this.scoreSpan_.style.top = '-12px';
  this.scoreSpan_.style.position = 'relative';
  this.scoreSpan_.innerHTML = '0';

  img = document.createElement('IMG');
  img.src = 'zombie_time.png';
  this.timeDiv_.appendChild(img);
  this.timeSpan_ = document.createElement('SPAN');
  this.timeDiv_.appendChild(this.timeSpan_);

  this.timeSpan_.style.backgroundColor = 'rgba(210, 238, 191, 0.55)';
  this.timeSpan_.style.border = '3px solid #8dbb78';
  this.timeSpan_.style.color = '#8c0000';
  this.timeSpan_.style.borderLeft = '0';
  this.timeSpan_.style.display = 'inline';
  this.timeSpan_.style.fontWeight = 'bold';
  this.timeSpan_.style.padding = '5px';
  this.timeSpan_.style.top = '-12px';
  this.timeSpan_.style.position = 'relative';
  this.timeSpan_.innerHTML = this.GAME_TIME_;

  this.map_.controls[google.maps.ControlPosition.TOP_RIGHT].push(
      this.timeDiv_);
  this.map_.controls[google.maps.ControlPosition.TOP_RIGHT].push(
      this.scoreDiv_);
};


/**
 * Setup the icons to use
 *
 * @private
 */
MapOfTheDead.prototype.setupIcons_ = function() {
  var zombieIcons = {};

  zombieIcons.still = new google.maps.MarkerImage(
      'zombie_still.png',
      new google.maps.Size(119, 95),
      new google.maps.Point(0, 0),
      new google.maps.Point(0, 47));

  zombieIcons.walkBackward = new google.maps.MarkerImage(
      'zombie_walk.gif',
      new google.maps.Size(119, 95),
      new google.maps.Point(0, 0),
      new google.maps.Point(85, 47));

  zombieIcons.walkForward = new google.maps.MarkerImage(
      'zombie_walk_forward.gif',
      new google.maps.Size(119, 95),
      new google.maps.Point(0, 0),
      new google.maps.Point(25, 47));

  for (var i = 1; i <= 5; i++) {
    var key1 = 'zombie_death_' + i;
    var key2 = 'zombie_death_forward_' + i;

    zombieIcons[key1] = new google.maps.MarkerImage(key1 + '.png',
      new google.maps.Size(119, 95),
      new google.maps.Point(0, 0),
      new google.maps.Point(85, 47));

    zombieIcons[key2] = new google.maps.MarkerImage(key2 + '.png',
      new google.maps.Size(119, 95),
      new google.maps.Point(0, 0),
      new google.maps.Point(25, 47));
  }

  this.zombieIcons_ = zombieIcons;

  var reticuleImage = new google.maps.MarkerImage('zombie_reticule.png',
    new google.maps.Size(542, 548),
    new google.maps.Point(0, 0),
    new google.maps.Point(203, 205), // 271, 274
    new google.maps.Size(406, 411));
  this.reticule_ = new google.maps.Marker({
    icon: reticuleImage,
    zIndex: 100,
    clickable: false
  });

  this.reticule_.bindTo('position', this.map_, 'center');
};


/**
 * Remove all the zombies
 *
 * @private
 */
MapOfTheDead.prototype.removeAllZombies_ = function() {
  for (var i = 0, zombie; zombie = this.zombies_[i]; i++) {
    zombie.setMap(null);
    delete zombie;
  }
  this.zombies_.length = 0;
};


/**
 * Start the game
 *
 * @private
 */
MapOfTheDead.prototype.startGame_ = function() {
  this.gameSeconds_ = 0;
  this.currentScore_ = 0;

  this.clearIntervals_();
  this.updateTime_();
  this.setScore_(0);
  this.removeAllZombies_();
  this.reticule_.setMap(this.map_);
  this.isPlaying_ = true;
  this.startIntervals_();
  this.spawnZombie_();
};


/**
 * Start the intervals
 *
 * @private
 */
MapOfTheDead.prototype.startIntervals_ = function() {
  var that = this;
  this.gameTimer_ = window.setInterval(function() {
    that.updateTime_();
  }, 1000);

  this.spawnTimer_ = window.setInterval(function() {
    that.spawnZombie_();
  }, 5000);

  this.animationTimer_ = window.setInterval(function() {
    that.moveZombies_();
  }, 300);
};



/**
 * Clear all the intervals
 *
 * @private
 */
MapOfTheDead.prototype.clearIntervals_ = function() {
  if (this.gameTimer_) {
    window.clearInterval(this.gameTimer_);
  }

  if (this.spawnTimer_) {
    window.clearInterval(this.spawnTimer_);
  }

  if (this.animationTimer_) {
    window.clearInterval(this.animationTimer_);
  }
};


/**
 * Span a new zombie randomly in the map viewport.
 *
 * @private
 */
MapOfTheDead.prototype.spawnZombie_ = function() {
  var bounds = this.map_.getBounds();
  var southWest = bounds.getSouthWest();
  var northEast = bounds.getNorthEast();
  var lngSpan = northEast.lng() - southWest.lng();
  var latSpan = northEast.lat() - southWest.lat();

  var moveForward = (Math.random() > 0.5);
  var icon;
  var position;

  if (moveForward) {
    icon = this.zombieIcons_.walkForward;
    position = new google.maps.LatLng(southWest.lat() + latSpan *
                                      Math.random(), southWest.lng());
  } else {
    icon = this.zombieIcons_.walkBackward;
    position = new google.maps.LatLng(southWest.lat() + latSpan *
                                      Math.random(), northEast.lng());
  }

  var zombie = new google.maps.Marker({
    icon: icon,
    position: position,
    clickable: false,
    zIndex: this.ZOMBIE_ZINDEX_,
    map: this.map_
  });

  zombie.moveForward = moveForward;
  zombie.isDead = false;
  this.zombies_.push(zombie);
};


/**
 * Move the zombies or update the dead icon if needed
 *
 * @private
 */
MapOfTheDead.prototype.moveZombies_ = function() {
  for (var i = 0, zombie; zombie = this.zombies_[i]; i++) {
    if (!zombie.isDead) {
      var oldPosition = zombie.getPosition();
      var latOffset = 0.0;
      var lngOffset = zombie.moveForward ? 0.0001 : -0.0001;
      var newPosition = new google.maps.LatLng(oldPosition.lat() + latOffset,
                                               oldPosition.lng() + lngOffset);
      zombie.setPosition(newPosition);
    } else if (zombie.deadState < 6) {
      var key;
      if (zombie.moveForward) {
        key = 'zombie_death_forward_' + zombie.deadState;
      } else {
        key = 'zombie_death_' + zombie.deadState;
      }
      var icon = this.zombieIcons_[key];
      zombie.deadState++;
      zombie.setIcon(icon)
    }
  }
};




/**
 * Update the time and end the game if no time is left.
 *
 * @private
 */
MapOfTheDead.prototype.updateTime_ = function() {
  this.gameSeconds_++;

  this.timeSpan_.innerHTML = this.GAME_TIME_ - this.gameSeconds_;

  if (this.gameSeconds_ >= this.GAME_TIME_) {
    this.endGame();
  }
};


/**
 * End the game
 *
 */
MapOfTheDead.prototype.endGame = function() {
  this.clearIntervals_();

  // For each of our zombie markers set the icon to be image still
  for (var i = 0, zombie; zombie = this.zombies_[i]; i++) {
    if (!zombie.isDead) {
      zombie.setIcon(this.zombieIcons_.still);
    }
  }

  this.isPlaying_ = false;
  this.reticule_.setMap(null);
};


/**
 * Sets the score
 *
 * @param {string} score The score to set.
 * @private
 */
MapOfTheDead.prototype.setScore_ = function(score) {
  this.scoreSpan_.innerHTML = score;
};

window['MapOfTheDead'] = MapOfTheDead;
MapOfTheDead.prototype['startGame'] = MapOfTheDead.prototype.startGame;
MapOfTheDead.prototype['endGame'] = MapOfTheDead.prototype.endGame;
