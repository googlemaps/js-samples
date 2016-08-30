var map;
var geocoder;
var mapStyleRenderer;
var styles = [];
var currentStyle = 0;

var huePicker;
var sliderTimer;
var hexre = /^#[0-9a-f]{6}/i;

var ukie = new google.maps.LatLngBounds(
  new google.maps.LatLng(49.0, -10.0),
  new google.maps.LatLng(66.0, 2.0)
);

var aunz = new google.maps.LatLngBounds(
  new google.maps.LatLng(-48.0, 112.0),
  new google.maps.LatLng(-9.0, 180.0) 
);

/* TODO
  Remove vertical scrollbar on lists
  Make text fields editable (with sanitisation)
*/

function init() {
  initGA();
  
  var opt = {
    center: new google.maps.LatLng(0, 0),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  
  // Calculate the zoom level based on window height
  var zoom = 0;
  var height = document.body.clientHeight;
  for (;height > 256 * (1 << zoom); zoom++);
  opt.zoom = zoom;

  initMap(opt);

  var mapStyleDiv = document.getElementById('mapStyleScrollable');
  mapStyleRenderer = new MapStyleRenderer(mapStyleDiv, styles);
  mapStyleRenderer.addSelectionListener(loadMapStyle);
  mapStyleRenderer.addTrashcanListener(deleteStyle);
  
  huePicker = new HuePicker(document.getElementById('huePicker'));
  huePicker.addListener(setHue);

  addStyle();
}

function initGA() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-77808203-2', 'auto');
  ga('send', 'pageview');
}

function initMap(opt) {

  var div = document.getElementById('map');
  map = new google.maps.Map(div, opt);
  geocoder = new google.maps.Geocoder();
  
  if (BrowserDetect.browser === "Explorer") {
    document.getElementById("mapStyle").style.display = "none";
    document.getElementById("selectors").style.display = "none";
    alert("The Styled Maps Wizard does not currently support your browser. Please use Chrome, Firefox, or Safari. Note that once you have designed a style using the wizard and applied it to a Maps API map, the styled map will display correctly on all browsers supported by the Maps API v3");
    return;
  }
  
  google.maps.event.addListener(map, 'bounds_changed', fixLabel);
    
  createAddressSearchControl();
}

/* Feature Type hierarchy */

function setFeatureType(i) {
  styles[currentStyle].featureType = document.getElementById('features_level_' + i).value;
  updateFeatureTypeLists();
  setMapStyle(true); 
}

function updateFeatureTypeLists() {
  var type = 'all.' +  styles[currentStyle].featureType;
  var components = type.split('.');
  var selected = [];
  var value;
  
  for (var i = 1; i <= 3;  i++) {
    clearFeatures(i + 1);
    var list = document.getElementById('features_level_' + i);
    list.selectedIndex = -1;
    if (components[i]) {
      selected.push(components[i]);
      value = selected.join('.');
      list.value = value;
      setFeatureList(i + 1, value);
    }
  }
  scrollToSelectedFeatureType();
}

function setFeatureList(i, parent) {
  // Level 0 and 1 are never cleared so need not be reset  
  if ( i < 2 || i > 3) {
    return;
  }

  var clickHandler;  
  var options = document.getElementById('features_level_' + i).options;
  
  if (i == 2) {
    clickHandler = function() { setFeatureType(2) };
    switch (parent) {
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
  } else if (i == 3) {
    clickHandler = function() { setFeatureType(3) };
    switch (parent) {
      case "road.highway":
        options[0] = new Option("Controlled access", "road.highway.controlled_access");
        break;
      case "transit.station":
        options[0] = new Option("Airport", "transit.station.airport");
        options[1] = new Option("Bus", "transit.station.bus");
        options[2] = new Option("Rail", "transit.station.rail");
        break;
      case "landscape.natural":
        options[0] = new Option("Land cover", "landscape.natural.landcover");
        options[1] = new Option("Terrain", "landscape.natural.terrain");
        break;        
    }  
  }
  
  for (var j = 0; j < options.length; j++) {
    options[j].onclick = clickHandler;
  }  
}

function clearFeatures(i) {
  // Level 0 and 1 are never cleared
  if (i > 1 && i < 4) {
    var list = document.getElementById('features_level_' + i);
    if (list.options) {
      list.options.length = 0;
    }
  }
}

function scrollToSelectedFeatureType() {
  var panel = document.getElementById('featureTypePanel');
  switch (styles[currentStyle].featureType) {
    case "all":
      animatedScroll(panel, 0);
      return;
    case "administrative":
    case "landscape":
    case "poi":
    case "road":
    case "transit":
    case "water":
      animatedScroll(panel, 120);
      return;
    default:
      animatedScroll(panel, 240);
  }
}

/* Element Type hierarchy */

function setElementType(i) {
  styles[currentStyle].elementType = document.getElementById('elements_level_' + i).value;
  updateElementTypeLists();
  setMapStyle(true); 
}

function updateElementTypeLists() {
  var type = 'all.' +  styles[currentStyle].elementType;
  var components = type.split('.');
  var selected = [];
  var value;
  
  for (var i = 1; i <= 3;  i++) {
    clearElements(i + 1);
    var list = document.getElementById('elements_level_' + i);
    list.selectedIndex = -1;
    if (components[i]) {
      selected.push(components[i]);
      value = selected.join('.');
      list.value = value;
      setElementList(i + 1, value);
    }
  }
  scrollToSelectedElementType();
}

function setElementList(i, parent) {
  // Level 0 and 1 are never cleared so need not be reset  
  if ( i < 2 || i > 3) {
    return;
  }

  var clickHandler;  
  var options = document.getElementById('elements_level_' + i).options;
  
  if (i == 2) {
    clickHandler = function() { setElementType(2) };
    switch (parent) {
      case "geometry":
        options[0] = new Option("Fill", "geometry.fill");
        options[1] = new Option("Stroke", "geometry.stroke");
        break;
      case "labels":
        options[0] = new Option("Text", "labels.text");
        options[1] = new Option("Icon", "labels.icon");
        break;
    }
  } else if (i == 3) {
    clickHandler = function() { setElementType(3) };
    switch (parent) {
      case "labels.text":
        options[0] = new Option("Fill", "labels.text.fill");
        options[1] = new Option("Stroke", "labels.text.stroke");
        break;
    }  
  }
  
  for (var j = 0; j < options.length; j++) {
    options[j].onclick = clickHandler;
  }  
}

function clearElements(i) {
  // Level 0 and 1 are never cleared
  if (i > 1 && i < 4) {
    var list = document.getElementById('elements_level_' + i);
    if (list.options) {
      list.options.length = 0;
    }
  }
}

function scrollToSelectedElementType() {
  var panel = document.getElementById('elementTypePanel');
  switch (styles[currentStyle].elementType) {
    case "all":
      animatedScroll(panel, 0);
      return;
    case "geometry":
    case "labels":
      animatedScroll(panel, 120);
      return;
    default:
      animatedScroll(panel, 240);
  }
}


/* Hierarchy Utility Functions */

function animatedScroll(element, target) {
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

/* Stylers */

function setVisibility() {
  document.getElementById('set_visibility').checked = true;
  if (document.getElementById('visibility_on').checked) {
    document.getElementById('visibility').value = 'on';
  } else if (document.getElementById('visibility_simplified').checked) {
    document.getElementById('visibility').value = 'simplified';
  } else if (document.getElementById('visibility_off').checked) {
    document.getElementById('visibility').value = 'off';
  }
  setStyler('visibility');
}

function setInvertLightness() {
  if (document.getElementById('set_invert_lightness').checked) {
    document.getElementById('invert_lightness').value = 'true';
  } else {
    document.getElementById('invert_lightness').value = 'false';          
  }
  setStyler('invert_lightness');
}

function setColorRGB() {
  var r = parseInt(document.getElementById('redSlider').value);
  var g = parseInt(document.getElementById('greenSlider').value);
  var b = parseInt(document.getElementById('blueSlider').value);
  
  if (r && g && b) {
    var aarrggbb = getColorCode([r, g, b]); 
    document.getElementById('color').value = aarrggbb;
    document.getElementById('colorSample').style.backgroundColor = aarrggbb;
  }

  setColor(r, g, b);
}

function setHexColor(event) {
  var hex = document.getElementById('color').value;
  if (hexre.test(hex)) {
    
    if (hex.length == 6) {
      hex = '#' + hex;
    }

    var rgb = getRGBFromColorCode(hex);
    document.getElementById('redSlider').value = rgb[0];
    document.getElementById('greenSlider').value = rgb[1];
    document.getElementById('blueSlider').value = rgb[2];

    document.getElementById('colorSample').style.backgroundColor = hex;
    setColor(rgb[0], rgb[1], rgb[2]);
  }
}

function setColor(r, g, b) {
  if (r && g && b) {
    document.getElementById('redInt').value = r;
    document.getElementById('greenInt').value = g;
    document.getElementById('blueInt').value = b;
  }

  document.getElementById('set_color').checked = true;

  if (sliderTimer != null) {
    clearTimeout(sliderTimer);
  }
  sliderTimer = setTimeout(function() {
    sliderTimer = null;
    setStyler('color');
  }, 200);  
}

function setWeight() {
  var weight = parseInt(document.getElementById('weightSlider').value) / 10;
  document.getElementById('set_weight').checked = true;
  document.getElementById('weight').value = weight.toFixed(1);
  if (sliderTimer != null) {
      clearTimeout(sliderTimer);
  }
  sliderTimer = setTimeout(function() {
    sliderTimer = null;
    setStyler('weight');      
  }, 200);
}

function setHue(rgb) {
  document.getElementById('set_hue').checked = true;
  document.getElementById('hue').value = rgb;
  document.getElementById('hueSample').style.backgroundColor = rgb;
  setStyler('hue');  
}

function setSaturation() {
  var saturation = parseInt(document.getElementById('satSlider').value);
  document.getElementById('set_saturation').checked = true;
  document.getElementById('saturation').value = saturation;
  if (sliderTimer != null) {
      clearTimeout(sliderTimer);
  }
  sliderTimer = setTimeout(function() {
    sliderTimer = null;
    setStyler('saturation');      
  }, 200);
}

function setLightness() {
  var lightness = parseInt(document.getElementById('lightSlider').value);
  document.getElementById('set_lightness').checked = true;
  document.getElementById('lightness').value = lightness;
  if (sliderTimer != null) {
    clearTimeout(sliderTimer);
  }
  sliderTimer = setTimeout(function() {
    sliderTimer = null;
    setStyler('lightness');
  }, 200);  
}

function setGamma() {
    var gamma = getGammaFromSlider(parseInt(document.getElementById('gammaSlider').value));
    document.getElementById('set_gamma').checked = true;
    document.getElementById('gamma').value = gamma;
    if (sliderTimer != null) {
      clearTimeout(sliderTimer);
    }
    sliderTimer = setTimeout(function() {
      sliderTimer = null;
      setStyler('gamma');
    }, 200);
}

function getGammaFromSlider(value) {
  var gamma;
  value /= 500;
  if (value < 0.5) {
    gamma = Math.pow(10, (-2 * value) + 1.0);
    gamma = (Math.round(gamma * 100) / 100);
    if (gamma > 9.99) { gamma = 9.99 }
  } else {
    gamma = 1 - (2 * (value - 0.5));
    gamma = (Math.round(gamma * 100) / 100);
    if (gamma < 0.01) { gamma = 0.01 }
  }
  return gamma;
}

function getSliderFromGamma(gamma) {
  var value;
  if (gamma > 1) {
    value = Math.log(gamma) / Math.log(10);
    value -= 1.0;
    value /= -2;
  } else {
    value = ((1 - gamma) / 2) + 0.5;
  }
  return Math.round(value * 500);
}

/* Map Styles management */

function loadMapStyle(i) {
  currentStyle = i;
  resetStylers();
  updateFeatureTypeLists();
  updateElementTypeLists();
  loadStylers();
}

function addStyle() {
  currentStyle = styles.length;
  styles.push({});
  resetCurrentStyle();
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

function setMapStyle(selectorClick) {
  if (! selectorClick || styles[currentStyle].stylers.length > 0) {
    map.setOptions({ 'styles': styles });
  }
  
  if (! isStaticMapsCompatible()) {
    document.getElementById('staticMapButton').disabled = true;
  } else {
    document.getElementById('staticMapButton').disabled = false;
  }
  
  mapStyleRenderer.refresh(currentStyle);
  mapStyleRenderer.selectPanel(currentStyle);
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
        case "color":
          document.getElementById('colorSample').style.backgroundColor = stylers[i][p];
          var rgb = getRGBFromColorCode(stylers[i][p]);
          document.getElementById('redSlider').value = rgb[0];
          document.getElementById('greenSlider').value = rgb[1];
          document.getElementById('blueSlider').value = rgb[2];
          document.getElementById('redInt').value = rgb[0];
          document.getElementById('greenInt').value = rgb[1];
          document.getElementById('blueInt').value = rgb[2];
          break;
        case 'weight':
          document.getElementById('weightSlider').value = (stylers[i][p] * 10);
          break;
        case "hue":
          document.getElementById('hueSample').style.backgroundColor = stylers[i][p];
          break;
        case "saturation":
          document.getElementById('satSlider').value = stylers[i][p];
          break;
        case "lightness":
          document.getElementById('lightSlider').value = stylers[i][p];
          break;
        case "gamma":
          document.getElementById('gammaSlider').value = getSliderFromGamma(stylers[i][p]);
          break;
      }
    }
  }
}

function resetCurrentStyle() {
  styles[currentStyle] = {
    featureType: 'all',
    elementType: 'all',
    stylers: []
  };
  resetStylers();
  updateFeatureTypeLists();
  updateElementTypeLists();
  setMapStyle();
}

function resetStylers() {
  var stylers = [ 'visibility', 'invert_lightness', 'color', 'weight', 'hue', 'saturation', 'lightness', 'gamma'];
  for (var i = 0; i < stylers.length; i++) {
    document.getElementById('set_' + stylers[i]).checked = false;
    resetStyler(stylers[i]);
  }
}

/* Styler management */

function resetStyler(styler) {
  document.getElementById(styler).value = "";
  switch (styler) {
    case 'visibility':
      document.getElementById('visibility_on').checked = false;
      document.getElementById('visibility_simplified').checked = false;
      document.getElementById('visibility_off').checked = false;
      break;
    case 'hue':
      document.getElementById('hueSample').style.backgroundColor = "#f0f0f0";
      break;
    case 'color':
      document.getElementById('colorSample').style.backgroundColor = "#f0f0f0";
      document.getElementById('redSlider').value = 128;
      document.getElementById('greenSlider').value = 128;
      document.getElementById('blueSlider').value = 128;
      document.getElementById('redInt').value = '';
      document.getElementById('greenInt').value = '';
      document.getElementById('blueInt').value = '';
      break;
    case 'weight':
      document.getElementById('weightSlider').value = '0.1';
      break;
    case 'saturation':
      document.getElementById('satSlider').value = 0;
      break;
    case 'lightness':
      document.getElementById('lightSlider').value = 0;
      break;
    case 'gamma':
      document.getElementById('gammaSlider').value = 250;
      break;            
  }        
}

function setStyler(styler) {
  deleteStyler(styler);
  if (document.getElementById('set_' + styler).checked) {
    var value = document.getElementById(styler).value;
    if (! value) {
      value = getDefaultStylerValue(styler);
    }
    var stylerLiteral = {};
    switch (styler) {
      case 'visibility':
      case 'color':
      case 'hue':
        stylerLiteral[styler] = value;
        break;
      case 'weight':
        stylerLiteral[styler] = parseFloat(value);
        break;
      case 'saturation':
      case 'lightness':
        var intValue = parseInt(value);
        if (intValue != 0) {
          stylerLiteral[styler] = parseInt(value);
        }
        break;
      case 'gamma':
        var floatValue = parseFloat(value);
        if (floatValue != 0) {
          stylerLiteral[styler] = parseFloat(value);          
        }
        break;
      case 'invert_lightness':
        stylerLiteral[styler] = (value === 'true');
        break;
    }
    if (stylerLiteral.hasOwnProperty(styler)) {
      styles[currentStyle].stylers.push(stylerLiteral);
    }
  } else {
    resetStyler(styler);
  }
  setMapStyle();
  ga('send', {
    hitType: 'event',
    eventCategory: 'style',
    eventAction: 'modify'
  });
}

function getDefaultStylerValue(styler) {
  var value;
  switch (styler) {
    case 'visibility':
      value = "on";
      document.getElementById('visibility_on').checked = true;
      break;
    case 'color':
      value = '#808080';
      document.getElementById('redInt').value = '128';
      document.getElementById('greenInt').value = '128';
      document.getElementById('blueInt').value = '128';
      document.getElementById('colorSample').style.backgroundColor = value;
      break;
    case 'weight':
      value = '0.1';
      break;
    case 'hue':
      value = '#ff0000';
      document.getElementById('hueSample').style.backgroundColor = value;
      break;
    case 'saturation':
    case 'lightness':
      value = 0;
    case 'gamma':
      value = 1.0;
      break;
    case 'invert_lightness':
      value = "true";
  }
  document.getElementById(styler).value = value;
  return value;
}

function deleteStyler(styler) {
  var i = findStyler(styler);
  if (i != -1) {
    styles[currentStyle].stylers.splice(i, 1);
  }
}

function findStyler(styler) {
  if (styles[currentStyle].stylers) {
    for (var i = 0; i < styles[currentStyle].stylers.length; i++) {
      for (var p in styles[currentStyle].stylers[i]) {
        if (p === styler) {
          return i;
        }
      }
    }
  }
  return -1;
}

/* JSON pretty printer */

function showJson() {
  var jsonStyles = [];
  for (var i = 0; i < styles.length; i++) {
    var hasPreviousEntry = false;
    jsonStyles[i] = '{\n'
    if (styles[i].featureType != 'all') {
      jsonStyles[i] += '    "featureType": "' + styles[i].featureType + '"';
      hasPreviousEntry = true;
    }
    
    if (styles[i].elementType != 'all') {
      if (hasPreviousEntry) {
        jsonStyles[i] += ',\n';
      }
      jsonStyles[i] += '    "elementType": "' + styles[i].elementType + '"';      
      hasPreviousEntry = true;
    }
    
    if (styles[i].stylers.length) {
      if (hasPreviousEntry) {
        jsonStyles[i] += ',\n';
      }
      jsonStyles[i] += '    "stylers": [\n';
      var jsonStylers = [];
      
      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          switch (p) {
            case 'visibility':
            case 'color':
            case 'hue':
              jsonStylers[j] = '      { "' + p + '": "' + styles[i].stylers[j][p] + '" }';
              break;
            default:
              jsonStylers[j] = '      { "' + p + '": ' + styles[i].stylers[j][p] + ' }'
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
  ga('send', {
    hitType: 'event',
    eventCategory: 'JSON',
    eventAction: 'export'
  });
}

function closeJson() {
  var popup = document.getElementById('json');
  popup.removeChild(popup.childNodes[2]);
  popup.style.display = 'none';
  document.getElementById('lightbox').style.display = 'none';
}

/* Static Maps support */

function isStaticMapsCompatible() {
  return true;
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
  ga('send', {
    hitType: 'event',
    eventCategory: 'staticMap',
    eventAction: 'export'
  });
}

function closeStaticMap() {
  var popup = document.getElementById('staticMap');
  var urlDiv = document.getElementById('staticMapUrl');
  urlDiv.removeChild(urlDiv.childNodes[0]);
  popup.style.display = 'none';
  document.getElementById('lightbox').style.display = 'none';
}

function getStaticMapsURL() {
  var url = 'https://maps.googleapis.com/maps/api/staticmap?';
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
        if (p == 'hue' || p == 'color') {
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

/* Help window */

function showHelp() {
  document.getElementById('help').style.display = 'block';
  document.getElementById('helpButton').disabled = true;
}

function closeHelp() {
  document.getElementById('help').style.display = 'none';
  document.getElementById('helpButton').disabled = false;
}

/* Address Search Control */

function createAddressSearchControl() {
  var control = document.createElement('div');
  var input = document.createElement('input');
  control.appendChild(input);
  control.setAttribute('id', 'locationField');
  input.style.width = '100%';
  input.style.height = '100%';
  input.style.margin = '0';
  input.style.border = '1px solid #A5A5A5';
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

function getColorCode(ints) {
  var code = '#';
  
  for (var i = 0; i < ints.length; i++) {
    var hex = ints[i].toString(16);
    hex = (hex.length === 1 ? '0' + hex : hex);
    code = code + hex;
  }

  return code;
}

function getRGBFromColorCode(code) {
  var offset = 1;
  var ints = [];
  for (i = 1; i <= (code.length - 2); i += 2) {
    var hex = code.substring(i, i+2);
    ints.push(parseInt(hex, 16));
  }
  return ints;
}

function fixLabel() {
  var bounds = map.getBounds();
  var label = document.getElementById('colourLabel');
  var text = 'Color';
  if (map.getZoom() > 4) {
    if (bounds.intersects(ukie) || bounds.intersects(aunz)) {
      text = 'Colour';
    } 
  }
  label.innerHTML = text;
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
    var rrggbb = getColorCode(rgb)

    for (var i = 0; i < me.listeners.length; i++) {
      me.listeners[i](rrggbb);
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
    color: "Color",
    weight: "Weight",
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
  this.addStyle(table, 'color', style.stylers);
  this.addStyle(table, 'weight', style.stylers);
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
  if (att == 'weight' || val) {
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
