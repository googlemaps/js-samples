var map;
var geocoder;
var mapStyleRenderer;
var styles = [];
var currentStyle = 0;

var huePicker;
var satSlider;
var lightSlider;
var gammaSlider;

var sliderTimer;
  
function init() {
  
  var opt = {
    center: new google.maps.LatLng(0, 0),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  // Calculate the zoom level based on window height
  var zoom = 0;
  var height = document.body.clientHeight;
  for (;height > 256 * (1 << zoom); zoom++);
  opt.zoom = zoom;
  
  var div = document.getElementById('map');
  map = new google.maps.Map(div, opt);
  geocoder = new google.maps.Geocoder();

  if (BrowserDetect.browser === "Explorer") {
    document.getElementById("ruleColumns").style.display = "none";
    alert("You must use Chrome, Firefox, or Safari to use the Styled Map wizard");
    return;
  }
  
  var mapStyleDiv = document.getElementById('mapStyleScrollable');
  mapStyleRenderer = new MapStyleRenderer(mapStyleDiv, styles);
  mapStyleRenderer.addSelectionListener(loadMapStyle);
  mapStyleRenderer.addTrashcanListener(deleteStyle);
  
  makeSliders();
  huePicker = new HuePicker(document.getElementById('huePicker'));
  huePicker.addListener(function(rgb) {
    document.getElementById('set_hue').checked = true;
    document.getElementById('hue').value = rgb;
    document.getElementById('hueSample').style.backgroundColor = rgb;
    setRule('hue');
  });
  
  createGeocoderControl();
  addStyle();
}

function makeSliders() {
  satSlider = new Slider(document.getElementById('satSlider'));
  satSlider.addListener(function(value, position) {
    document.getElementById('set_saturation').checked = true;
    var s = Math.round((200 * value) - 100);
    document.getElementById('saturation').value = s;
    if (sliderTimer != null) {
      clearTimeout(sliderTimer);
    }
    sliderTimer = setTimeout(function() {
      sliderTimer = null;
      setRule('saturation');      
    }, 200);
    //styles[currentStyle].sliders.saturation = position;
  });

  lightSlider = new Slider(document.getElementById('lightSlider'));
  lightSlider.addListener(function(value, position) {
    document.getElementById('set_lightness').checked = true;
    var l = Math.round((200 * value) - 100);
    document.getElementById('lightness').value = l;
    if (sliderTimer != null) {
      clearTimeout(sliderTimer);
    }
    sliderTimer = setTimeout(function() {
      sliderTimer = null;
      setRule('lightness');
    }, 200);
    //styles[currentStyle].sliders.lightness = position;
 });
  
  gammaSlider = new Slider(document.getElementById('gammaSlider'));
  gammaSlider.addListener(function(value, position) {
    document.getElementById('set_gamma').checked = true;
    var g;
    if (value < 0.5) {
      g = Math.pow(10, (-2 * value) + 1.0);
      g = (Math.round(g * 100) / 100);
      if (g > 9.99) { g = 9.99 }
    } else {
      g = 1 - (2 * (value - 0.5));
      g = (Math.round(g * 100) / 100);
      if (g < 0.01) { g = 0.01 }
    }
    document.getElementById('gamma').value = g;
    if (sliderTimer != null) {
      clearTimeout(sliderTimer);
    }
    sliderTimer = setTimeout(function() {
      sliderTimer = null;
      setRule('gamma');
    }, 200);
    //styles[currentStyle].sliders.gamma = position;
 });
}

function selectAllFeatures() {
  unselectLevel1();
  styles[currentStyle].featureType = document.getElementById('root').value;
  scrollToSelectedFeatureType();
  setMapStyle(true);
}

function selectLevel1() {
  setLevel2();
  styles[currentStyle].featureType = document.getElementById('level1').value;
  scrollToSelectedFeatureType();
  setMapStyle(true);        
}

function selectLevel2() {
  setLevel3();
  styles[currentStyle].featureType = document.getElementById('level2').value;
  scrollToSelectedFeatureType();
  setMapStyle(true);
}
  
function selectLevel3() {
  styles[currentStyle].featureType = document.getElementById('level3').value;
  scrollToSelectedFeatureType();
  setMapStyle(true);
}

function unselectLevel1() {
  document.getElementById('level3').options.length = 0;
  document.getElementById('level2').options.length = 0;
  document.getElementById('level1').selectedIndex = -1;
}

function setLevel2() {
  document.getElementById('level3').options.length = 0;

  var options = document.getElementById('level2').options;
  options.length = 0;
  
  switch (document.getElementById('level1').value) {
    case "administrative":
      options[0] = new Option("Country", "administrative.country");
      options[1] = new Option("Province", "administrative.province");
      options[2] = new Option("Locality", "administrative.locality");
      options[3] = new Option("Neighborhood", "administrative.neighborhood");
      options[4] = new Option("Land parcel", "administrative.land_parcel");
      break;
    case "landscape":
      options[0] = new Option("Man made", "landscape.man_made");
      options[1] = new Option("Natural", "landscape.natural");
      break;
    case "poi":
      options[0] = new Option("Attraction", "poi.attraction");
      options[1] = new Option("Business", "poi.business");
      options[2] = new Option("Government", "poi.government");
      options[3] = new Option("Medical", "poi.medical");
      options[4] = new Option("Park", "poi.park");
      options[5] = new Option("Place of worship", "poi.place_of_worship");
      options[6] = new Option("School", "poi.school");
      options[7] = new Option("Sports complex", "poi.sports_complex");
      break;
    case "road":
      options[0] = new Option("Highway", "road.highway");
      options[1] = new Option("Arterial", "road.arterial");
      options[2] = new Option("Local", "road.local");
      break;
    case "transit":
      options[0] = new Option("Line", "transit.line");
      options[1] = new Option("Station", "transit.station");
      break;
    case "water":
      break;
  }
  
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = selectLevel2;
  }
}

function setLevel3() {
  var options = document.getElementById('level3').options;
  options.length = 0;
  
  switch (document.getElementById('level2').value) {
    case "transit.station":
      options[0] = new Option("Airport", "transit.station.airport");
      options[1] = new Option("Bus", "transit.station.bus");
      options[2] = new Option("Rail", "transit.station.rail");
      break;
    case "road.highway":
      options[0] = new Option("Controlled access", "road.highway.controlled_access");
      break;
  }
  
  for (var i = 0; i < options.length; i++) {
    options[i].onclick = selectLevel3;
  }
}

function animatedScroll(target) {
  var element = document.getElementById('featureTypePanel');
  var current = element.scrollLeft;
  var t = 0;
  var i = current;
  if (current < target) {
    while (current < target) {
      var step = (target - current < 10 ? target - current : 10);
      current += step;
      setTimeout(scrollTo(element, current), t++ * 10);
    }
  } else {
    while (current > target) {
      var step = (current - target < 10 ? current - target : 10);
      current -= step;
      setTimeout(scrollTo(element, current), t++ * 10);
    }
  }
}

function scrollTo(element, n) {
  return function() {
    element.scrollLeft = n;
  }
}

function setElementType() {
  if (document.getElementById('elements_all').checked) {
    styles[currentStyle].elementType = 'all';
  } else if (document.getElementById('elements_geometry').checked) {
    styles[currentStyle].elementType = 'geometry';
  } else if (document.getElementById('elements_labels').checked) {
    styles[currentStyle].elementType = 'labels';
  }
  setMapStyle(true);
}

function setVisibility() {
  document.getElementById('set_visibility').checked = true;
  if (document.getElementById('visibility_on').checked) {
    document.getElementById('visibility').value = 'on';
  } else if (document.getElementById('visibility_simplified').checked) {
    document.getElementById('visibility').value = 'simplified';
  } else if (document.getElementById('visibility_off').checked) {
    document.getElementById('visibility').value = 'off';
  }
  setRule('visibility');
}

function setInvertLightness() {
  if (document.getElementById('set_invert_lightness').checked) {
    document.getElementById('invert_lightness').value = 'true';
  } else {
    document.getElementById('invert_lightness').value = 'false';          
  }
  setRule('invert_lightness');
}

function setRule(rule) {
  deleteRule(rule);
  if (document.getElementById('set_' + rule).checked) {
    var value = document.getElementById(rule).value;
    if (! value) {
      value = getDefaultRuleValue(rule);
    }
    var ruleObject = {};
    switch (rule) {
      case 'visibility':
      case 'hue':
        ruleObject[rule] = value;
        break;
      case 'saturation':
      case 'lightness':
        var intValue = parseInt(value);
        if (intValue != 0) {
          ruleObject[rule] = parseInt(value);
        }
        break;
      case 'gamma':
        var floatValue = parseFloat(value);
        if (floatValue != 0) {
          ruleObject[rule] = parseFloat(value);          
        }
        break;
      case 'invert_lightness':
        ruleObject[rule] = (value === 'true');
        break;
    }
    if (ruleObject[rule]) {
      styles[currentStyle].stylers.push(ruleObject);
    }
  } else {
    clearRuleUI(rule);
  }
  setMapStyle();
}

function getDefaultRuleValue(rule) {
  var value;
  switch (rule) {
    case 'visibility':
      value = "on";
      document.getElementById('visibility_on').checked = true;
      break;
    case 'hue':
      value = '#ff0000';
      document.getElementById('hueSample').style.backgroundColor = value;
      break;
    case 'saturation':
    case 'lightness':
    case 'gamma':
      value = 0;
      break;
    case 'invert_lightness':
      value = "true";
  }
  document.getElementById(rule).value = value;
  return value;
}

function clearRuleUI(rule) {
  document.getElementById(rule).value = "";
  switch (rule) {
    case 'visibility':
      document.getElementById('visibility_on').checked = false;
      document.getElementById('visibility_simplified').checked = false;
      document.getElementById('visibility_off').checked = false;
      break;
    case 'hue':
      document.getElementById('hueSample').style.backgroundColor = "#f0f0f0";
      break;
    case 'saturation':
      satSlider.reset();
      break;
    case 'lightness':
      lightSlider.reset();
      break;
    case 'gamma':
      gammaSlider.reset();
      break;            
  }        
}

function resetStyleUI() {
  var stylers = [ 'visibility', 'hue', 'saturation', 'lightness', 'gamma', 'invert_lightness'];
  for (var i = 0; i < stylers.length; i++) {
    document.getElementById('set_' + stylers[i]).checked = false;
    clearRuleUI(stylers[i]);
  }
  unselectLevel1();
  scrollToSelectedFeatureType();
  document.getElementById('elements_all').checked = true;
}

function resetStyle() {
  styles[currentStyle] = {
    featureType: 'all',
    elementType: 'all',
    stylers: [],
    sliders: {}
  }
  resetStyleUI();
  setMapStyle();
}

function deleteRule(rule) {
  var i = findRule(rule);
  if (i != -1) {
    styles[currentStyle].stylers.splice(i, 1);
  }
}

function findRule(rule) {
  if (styles[currentStyle].stylers) {
    for (var i = 0; i < styles[currentStyle].stylers.length; i++) {
      for (var p in styles[currentStyle].stylers[i]) {
        if (p === rule) {
          return i;
        }
      }
    }
  }
  return -1;
}

function setMapStyle(selectorClick) {
  if (! selectorClick || styles[currentStyle].stylers.length > 0) {
    map.setOptions({ 'styles': styles });
  }
  mapStyleRenderer.refresh(currentStyle);
  mapStyleRenderer.selectPanel(currentStyle);
}

function addStyle() {
  currentStyle = styles.length;
  styles.push({});
  resetStyle();
}

function deleteStyle(i) {
  styles.splice(i, 1);
  
  if (styles.length == 0) {
    addStyle();
  } else if (currentStyle == i) {
    loadMapStyle(styles.length - 1);
  } else if (currentStyle > i) {
    currentStyle--;
  }
  
  setMapStyle();          
}

function loadMapStyle(i) {
  currentStyle = i;
  resetStyleUI();
  loadFeatureType();
  loadElementType();
  loadStylers();
}

function loadFeatureType() {
  var type = styles[currentStyle].featureType;
  document.getElementById('root').value = "all";
  unselectLevel1();
  scrollToSelectedFeatureType();

  switch (type) {
    case "all":
      return;
    case "administrative":
    case "administrative.country":
    case "administrative.province":
    case "administrative.locality":
    case "administrative.neighborhood":
    case "administrative.land_parcel":
      document.getElementById('level1').value = "administrative";
      break;
    case "landscape":
    case "landscape.man_made":
    case "landscape.natural":
      document.getElementById('level1').value = "landscape"
      break;
    case "poi":
    case "poi.business":
    case "poi.medical":
    case "poi.government":
    case "poi.park":
    case "poi.place_of_worship":
    case "poi.school":
    case "poi.sports_complex":
      document.getElementById('level1').value = "poi"
      break;
    case "road":
    case "road.highway":
    case "road.arterial":
    case "road.local":
      document.getElementById('level1').value = "road";
      break;
    case "transit":
    case "transit.line":
    case "transit.station":
    case "transit.station.airport":
    case "transit.station.bus":
    case "transit.station.rail":
      document.getElementById('level1').value = "transit";
      break;
    case "water":
      document.getElementById('level1').value = "water"
      break;
  }
  
  setLevel2();
  switch (type) {
    case "transit.station.airport":
    case "transit.station.bus":
    case "transit.station.rail":
      document.getElementById('level2').value = "transit.station";
      setLevel3();
      document.getElementById('level3').value = type;
      break;
    default:
      document.getElementById('level2').value = type;
      setLevel3();
  }
}

function scrollToSelectedFeatureType() {
  switch (styles[currentStyle].featureType) {
    case "all":
      animatedScroll(0);
      return;
    case "administrative":
    case "landscape":
    case "poi":
    case "road":
    case "transit":
    case "water":
      animatedScroll(120);
      return;
    default:
      animatedScroll(240);
  }
}

function loadElementType(type) {
  var type = styles[currentStyle].elementType;
  document.getElementById('elements_' + type).checked = true;
}

function loadStylers() {
  var stylers = styles[currentStyle].stylers;
  for (var i = 0; i < stylers.length; i++) {
    for (var p in stylers[i]) {
      document.getElementById('set_' + p).checked = true;
      document.getElementById(p).value = stylers[i][p];
      switch (p) {
        case "visibility":
          document.getElementById('visibility_' + stylers[i][p]).checked = true;
          break;
        case "hue":
          document.getElementById('hueSample').style.backgroundColor = stylers[i][p];
          break;
        case "saturation":
          satSlider.setPosition(styles[currentStyle].sliders.saturation);
          break;
        case "lightness":
          lightSlider.setPosition(styles[currentStyle].sliders.lightness);
          break;
        case "gamma":
          gammaSlider.setPosition(styles[currentStyle].sliders.gamma);
          break;
      }
    }
  }
}

function showJson() {
  var jsonStyles = [];
  for (var i = 0; i < styles.length; i++) {
    jsonStyles[i] = '{\n'
    if (styles[i].featureType != 'all') {
      jsonStyles[i] += '    featureType: "' + styles[i].featureType + '",\n';
    }
    
    if (styles[i].elementType != 'all') {
      jsonStyles[i] += '    elementType: "' + styles[i].elementType + '",\n';      
    }
    
    if (styles[i].stylers.length) {
      jsonStyles[i] += '    stylers: [\n';
      var jsonStylers = [];
      
      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          switch (p) {
            case 'visibility':
            case 'hue':
              jsonStylers[j] = '      { ' + p + ': "' + styles[i].stylers[j][p] + '" }';
              break;
            default:
              jsonStylers[j] = '      { ' + p + ': ' + styles[i].stylers[j][p] + ' }'
          }
        }
      }
      jsonStyles[i] += jsonStylers.join(',\n');
      jsonStyles[i] += '\n    ]\n';
    }
    
    jsonStyles[i] += '  }';
  }
  var json = '[\n  ' + jsonStyles.join(',') + '\n]';
  
  var popup = document.getElementById('json');
  popup.appendChild(document.createTextNode(json));
  popup.style.display = "block";
  document.getElementById('lightbox').style.display = "block";
}

function closeJson() {
  var popup = document.getElementById('json');
  popup.removeChild(popup.childNodes[2]);
  popup.style.display = 'none';
  document.getElementById('lightbox').style.display = 'none';
}

function showStaticMap() {
  var url = getStaticMapsURL();
  document.getElementById("staticMapImg").src = url;
  var urlDiv = document.getElementById('staticMapUrl');
  var anchor = document.createElement('a');
  anchor.setAttribute('href', url);
  anchor.appendChild(document.createTextNode(url));
  urlDiv.appendChild(anchor);
  var popup = document.getElementById('staticMap');
  popup.style.display = "block";
  document.getElementById('lightbox').style.display = 'block';
}

function closeStaticMap() {
  var popup = document.getElementById('staticMap');
  var urlDiv = document.getElementById('staticMapUrl');
  urlDiv.removeChild(urlDiv.childNodes[0]);
  popup.style.display = 'none';
  document.getElementById('lightbox').style.display = 'none';
}

function showHelp() {
  document.getElementById('help').style.display = 'block';
  document.getElementById('helpButton').disabled = true;
}

function closeHelp() {
  document.getElementById('help').style.display = 'none';
  document.getElementById('helpButton').disabled = false;
}

function getStaticMapsURL() {
  var url = 'http://maps.googleapis.com/maps/api/staticmap?';
  var params = [];
  params.push('center=' + map.getCenter().toUrlValue());
  params.push('zoom=' + map.getZoom());
  params.push('format=png');
  params.push('sensor=false');
  params.push('size=640x480');
  params.push('maptype=' + map.getMapTypeId());
  
  for (var i = 0; i < styles.length; i++) {
    var styleRule = [];
    
    if (styles[i].featureType != 'all') {
      styleRule.push('feature:' + styles[i].featureType);
    }
    
    if (styles[i].elementType != 'all') {
      styleRule.push('element:' + styles[i].elementType)
    }
    
    for (var j = 0; j < styles[i].stylers.length; j++) {
      for (var p in styles[i].stylers[j]) {
        var ruleArg = styles[i].stylers[j][p];
        if (p == 'hue') {
          ruleArg = '0x' + ruleArg.substring(1);
        }
        styleRule.push(p + ':' + ruleArg);
      }
    }
    
    var rule = styleRule.join('|');
    if (rule != '') {
      params.push('style=' + rule);      
    }
  }
  
  return(url + params.join('&'));
}

function createGeocoderControl() {
  var control = document.createElement('div');
  var input = document.createElement('input');
  control.appendChild(input);
  control.setAttribute('id', 'locationField');
  input.style.width = '100%';
  input.style.height = '100%';
  input.style.margin = '0';
  input.style.border = '1px solid #A9BBDF';
  input.style.borderRadius = '2px';
  input.setAttribute('id', 'locationInput');
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(control);
  
  var ac = new google.maps.places.Autocomplete(input, { types: ['geocode'] });
  google.maps.event.addListener(ac, 'place_changed', function() {
    var place = ac.getPlace();
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
  });
  
  google.maps.event.addListener(map, 'bounds_changed', function() {
    input.blur();
    input.value = '';
  });
  
  input.onkeyup = submitGeocode(input);
}

function submitGeocode(input) {
  return function(e) {
    var keyCode;
  
    if (window.event) {
      keyCode = window.event.keyCode;
    } else if (variable) {
      keyCode = e.which;
    }
  
    if (keyCode == 13) {
      geocoder.geocode( { address: input.value }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.fitBounds(results[0].geometry.viewport);
        } else {
          alert("The location entered could not be found");
        }
      });
    }
  }
}

function do_click(field) {
  document.getElementById('set_' + field).click();
}

function HuePicker(div) {
  this.listeners = [];
  
  this.div = div;
  this.container = document.createElement('div');
  
  this.container.style.position = 'relative';
  this.container.style.width = '100%';
  this.container.style.height = '100%';
  this.div.appendChild(this.container);
        
  for (var h = 0; h < 180; h ++) {
    var rgb = this.hueToRgb(h / 180);
    var hue = document.createElement('div');

    hue.style.position = "absolute";
    hue.style.height = this.container.offsetHeight - 2;
    hue.style.width = "2px";
    hue.style.top = "1px";
    hue.style.left = (1 + (h*1.3)) + "px";
  
    hue.style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    hue.onclick = this.setHue(rgb);
    this.container.appendChild(hue);
  }
}

HuePicker.prototype.setHue = function(rgb) {
  var me = this;
  return function() {
    var rr = rgb[0].toString(16);
    var gg = rgb[1].toString(16);
    var bb = rgb[2].toString(16);
    
    rr = (rr.length === 1 ? '0' + rr : rr);
    gg = (gg.length === 1 ? '0' + gg : gg);
    bb = (bb.length === 1 ? '0' + bb : bb);
    
    for (var i = 0; i < me.listeners.length; i++) {
      me.listeners[i]('#' + rr + gg + bb);
    }
  }
}

HuePicker.prototype.hueToRgb = function(h){
    var r = this.h2rgb(h + 1/3);
    var g = this.h2rgb(h);
    var b = this.h2rgb(h - 1/3);

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

HuePicker.prototype.h2rgb = function(t){
    if(t < 0) t += 1;
    if(t > 1) t -= 1;
    
    if(t < 1/6) return 6 * t;
    if(t < 1/2) return 1;
    if(t < 2/3) return (2/3 - t) * 6;
    
    return 0;
}

HuePicker.prototype.addListener = function(f) {
  this.listeners.push(f);
}

function Slider(div) {
  this.listeners = [];
  
  this.div = div;
  this.container = document.createElement('div');
  this.track = document.createElement('div');
  this.handle = document.createElement('div');
  
  this.container.style.position = 'relative';
  this.container.style.width = '100%';
  this.container.style.height = '100%';
  this.div.appendChild(this.container);

  this.track.setAttribute('class', 'slidertrack');
  this.handle.setAttribute('class', 'sliderhandle');
  this.track.style.width = (this.container.offsetWidth - 20) + 'px';
  this.handle.style.left = ((this.container.offsetWidth / 2) - 2) + 'px'
  this.container.appendChild(this.track);
  this.container.appendChild(this.handle);
  
  this.handle.onmousedown = this.startSliderDrag();
  this.container.onmousemove = this.sliderDrag();
}

Slider.prototype.reset = function() {
  this.handle.style.left = ((this.container.offsetWidth / 2) - 2) + 'px';
}

Slider.prototype.startSliderDrag = function() {
  var me = this;
  return function(e) {
    me.startLeft = me.handle.offsetLeft;
    me.startMouseX = me.getMousePositionX(e);
    me.inDrag = true;
    document.body.onmouseup = me.stopSliderDrag();
 }
}

Slider.prototype.sliderDrag = function() {
  var me = this;
  return function(e) {
    if (me.inDrag) {
      var x = me.getMousePositionX(e);
      var left = me.startLeft + (x - me.startMouseX);
      if (left >= 8 && left <= me.container.offsetWidth - 12) {
        me.handle.style.left = left + 'px';
        var value = (left - 8) / (me.container.offsetWidth - 20);
        for (var i = 0; i < me.listeners.length; i++) {
          me.listeners[i](value, left);
        }
      }
    }
  }
}

Slider.prototype.stopSliderDrag = function() {
  var me = this;
  return function(e) {
    me.inDrag = false;
  }
}

Slider.prototype.getMousePositionX = function(e) {
  var posx = 0;
  if (!e) var e = window.event;
  if (e.pageX) 	{
          posx = e.pageX;
  }
  else if (e.clientX) 	{
          posx = e.clientX + document.body.scrollLeft
                  + document.documentElement.scrollLeft;
  }
  return posx;
}

Slider.prototype.setPosition = function(position) {
  this.handle.style.left = position + 'px';
}

Slider.prototype.addListener = function(f) {
  this.listeners.push(f);
}

function MapStyleRenderer(div, styles) {
  this.headers = [];
  this.panels = [];
  this.div = div;
  this.styles = styles;
  this.selectionListeners = [];
  this.trashcanListeners = [];
  this.selected = null;
  this.labels = {
    featureType: "Feature type",
    elementType: "Element type",
    visibility: "Visibility",
    hue: "Hue",
    invert_lightness: "Invert lightness",
    saturation: "Saturation",
    lightness: "Lightness",
    gamma: "Gamma"
  }
}

MapStyleRenderer.prototype.refresh = function(i) {
  var divs = this.getPanel(i);
  if (this.panels[i]) {
    this.div.replaceChild(divs.panel, this.panels[i]);    
    this.panels[i] = divs.panel;
  } else {
    this.div.appendChild(divs.header);
    this.div.appendChild(divs.panel);
    this.headers[i] = divs.header;
    this.panels[i] = divs.panel;
  }
}

MapStyleRenderer.prototype.selectPanel = function(selectedIndex) {
  if (this.selected != null) {
    this.panels[this.selected].style.backgroundColor = 'white';
    this.headers[this.selected].style.backgroundColor = '#f8f8f8';
  }
  this.panels[selectedIndex].style.backgroundColor = '#f8f8ff';  
  this.headers[selectedIndex].style.backgroundColor = '#f0f0ff';  
  this.selected = selectedIndex;
}

MapStyleRenderer.prototype.getPanel = function(i) {
  var style = this.styles[i];

  var header = document.createElement('div');
  header.setAttribute('class', 'mapStylePanelHeader');
  header.appendChild(document.createTextNode("Style " + i));
  
  var trashcan = document.createElement('div');
  trashcan.setAttribute('class', 'trashcan');
  trashcan.onclick = this.getTrashcanHandler(i);
  header.appendChild(trashcan);
  
  var panel = document.createElement('div');
  panel.setAttribute('class', 'mapStylePanel');
  
  var table = document.createElement('table');
  table.setAttribute('class', 'stylerTable');
  this.addRow(table, 'featureType', style.featureType);
  this.addRow(table, 'elementType', style.elementType);
  this.addStyle(table, 'visibility', style.stylers);
  this.addStyle(table, 'hue', style.stylers);
  this.addStyle(table, 'invert_lightness', style.stylers);
  this.addStyle(table, 'saturation', style.stylers);
  this.addStyle(table, 'lightness', style.stylers);
  this.addStyle(table, 'gamma', style.stylers);
  
  panel.onclick = this.getSelectionHandler(i);
  panel.appendChild(table);

  return { header: header, panel: panel };
}

MapStyleRenderer.prototype.getSelectionHandler = function(selectedIndex) {
  var me = this;
  return function() {
    me.selectPanel(selectedIndex);
    for (var i = 0; i < me.selectionListeners.length; i++) {
      me.selectionListeners[i](selectedIndex);
    }
  }
}

MapStyleRenderer.prototype.getTrashcanHandler = function(trashcanIndex) {
  var me = this;
  return function() {
    me.div.removeChild(me.headers[trashcanIndex]);
    me.div.removeChild(me.panels[trashcanIndex]);
    
    me.headers.splice(trashcanIndex, 1);
    me.panels.splice(trashcanIndex, 1);
    
    if (trashcanIndex == me.selected) {
      me.selected = null;
    } else if (trashcanIndex < me.selected) {
      me.selected = me.selected - 1;
    }
    
    for (var i = 0; i < me.headers.length; i++) {
      var title = document.createTextNode('Style ' + i);
      me.headers[i].replaceChild(title, me.headers[i].childNodes[0]);
      me.headers[i].childNodes[1].onclick = me.getTrashcanHandler(i);
      me.panels[i].onclick = me.getSelectionHandler(i);
    }
    
    for (var j = 0; j < me.trashcanListeners.length; j++) {
      me.trashcanListeners[j](trashcanIndex);
    }
  }
}

MapStyleRenderer.prototype.addRow = function(table, att, val) {
  if (val) {
    var tr = document.createElement('tr');
    var atd = document.createElement('td');
    var vtd = document.createElement('td');
    atd.appendChild(document.createTextNode(this.labels[att] + ':'));
    vtd.appendChild(document.createTextNode(val));
    atd.setAttribute('class', 'mapStyleLabel');
    tr.appendChild(atd);
    tr.appendChild(vtd);
    table.appendChild(tr);
  }
}

MapStyleRenderer.prototype.addStyle = function(table, style_name, stylers) {
  if (stylers) {
    for (var i = 0; i < stylers.length; i++) {
      for (var s in stylers[i]) {
        if (s === style_name) {
          this.addRow(table, style_name, stylers[i][s]);
        }
      }
    }
  }
}

MapStyleRenderer.prototype.addSelectionListener = function(f) {
  this.selectionListeners.push(f);
}

MapStyleRenderer.prototype.addTrashcanListener = function(f) {
  this.trashcanListeners.push(f);
}

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};
BrowserDetect.init();
