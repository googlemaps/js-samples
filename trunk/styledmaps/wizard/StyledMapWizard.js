      var map;
      var geocoder;
      var mapStyleRenderer;
      var styles = [];
      var currentStyle = 0;
      
      var huePicker;
      var satSlider;
      var lightSlider;
      var gammaSlider;
        
      function init() {
        
        var opt = {
          mapTypeControlOptions: {
            mapTypeIds: [ 'Styled']
          },
          center: new google.maps.LatLng(30, 0),
          zoom: 1,
          mapTypeId: 'Styled'
        };
        
        var div = document.getElementById('map');
        map = new google.maps.Map(div, opt);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);

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
        
        geocoder = new google.maps.Geocoder();
        createGeocoderControl();
        addStyle();
      }
      
      function makeSliders() {
        satSlider = new Slider(document.getElementById('satSlider'));
        satSlider.addListener(function(value, position) {
          document.getElementById('set_saturation').checked = true;
          var s = Math.round((200 * value) - 100);
          document.getElementById('saturation').value = s;
          setRule('saturation');
          styles[currentStyle].sliders.saturation = position;
        });

        lightSlider = new Slider(document.getElementById('lightSlider'));
        lightSlider.addListener(function(value, position) {
          document.getElementById('set_lightness').checked = true;
          var l = Math.round((200 * value) - 100);
          document.getElementById('lightness').value = l;
          setRule('lightness');
          styles[currentStyle].sliders.lightness = position;
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
          setRule('gamma');
          styles[currentStyle].sliders.gamma = position;
       });
      }
      
      function selectAllFeatures() {
        unselectLevel1();
        styles[currentStyle].featureType = document.getElementById('root').value;
        setMapStyle(true);        
      }

      function selectLevel1() {
        setLevel2();
        styles[currentStyle].featureType = document.getElementById('level1').value;
        setMapStyle(true);        
      }
      
      function selectLevel2() {
        setLevel3();
        styles[currentStyle].featureType = document.getElementById('level2').value;
        setMapStyle(true);
      }
        
      function selectLevel3() {
        styles[currentStyle].featureType = document.getElementById('level3').value;
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
        }
        
        for (var i = 0; i < options.length; i++) {
          options[i].onclick = selectLevel3;
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
              ruleObject[rule] = parseInt(value);
              break;
            case 'gamma':
              ruleObject[rule] = parseFloat(value);
              break;
            case 'invert_lightness':
              ruleObject[rule] = (value === 'true');
              break;
          }
          styles[currentStyle].rules.push(ruleObject);
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
        var rules = [ 'visibility', 'hue', 'saturation', 'lightness', 'gamma', 'invert_lightness'];
        for (var i = 0; i < rules.length; i++) {
          document.getElementById('set_' + rules[i]).checked = false;
          clearRuleUI(rules[i]);
        }
        unselectLevel1();
        document.getElementById('elements_all').checked = true;
      }
      
      function resetStyle() {
        styles[currentStyle] = {
          featureType: 'all',
          elementType: 'all',
          rules: [],
          sliders: {}
        }
        resetStyleUI();
        setMapStyle();
      }
      
      function deleteRule(rule) {
        var i = findRule(rule);
        if (i != -1) {
          styles[currentStyle].rules.splice(i, 1);
        }
      }
      
      function findRule(rule) {
        if (styles[currentStyle].rules) {
          for (var i = 0; i < styles[currentStyle].rules.length; i++) {
            for (var p in styles[currentStyle].rules[i]) {
              if (p === rule) {
                return i;
              }
            }
          }
        }
        return -1;
      }
      
      function setMapStyle(selectorClick) {
        if (! selectorClick || styles[currentStyle].rules.length > 0) {
          var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
          map.mapTypes.set('Styled', styledMapType);
        }
        mapStyleRenderer.refresh(currentStyle);
        mapStyleRenderer.selectPanel(currentStyle);
      }
      
      function addStyle() {
        currentStyle = styles.length;
        styles.push([]);
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
        loadRules();
      }
      
      function loadFeatureType() {
        var type = styles[currentStyle].featureType;
        document.getElementById('root').value = "all";
        unselectLevel1();
        
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
      
      function loadElementType(type) {
        var type = styles[currentStyle].elementType;
        document.getElementById('elements_' + type).checked = true;
      }
      
      function loadRules() {
        var rules = styles[currentStyle].rules;
        for (var i = 0; i < rules.length; i++) {
          for (var p in rules[i]) {
            document.getElementById('set_' + p).checked = true;
            document.getElementById(p).value = rules[i][p];
            switch (p) {
              case "visibility":
                document.getElementById('visibility_' + rules[i][p]).checked = true;
                break;
              case "hue":
                document.getElementById('hueSample').style.backgroundColor = rules[i][p];
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
          jsonStyles[i] += '    featureType: "' + styles[i].featureType + '",\n';
          jsonStyles[i] += '    elementType: "' + styles[i].elementType + '",\n';
          jsonStyles[i] += '    stylers: [\n';
          var jsonRules = []
          for (var j = 0; j < styles[i].rules.length; j++) {
            for (var p in styles[i].rules[j]) {
              switch (p) {
                case 'visibility':
                case 'hue':
                  jsonRules[j] = '      { ' + p + ': "' + styles[i].rules[j][p] + '" }';
                  break;
                default:
                  jsonRules[j] = '      { ' + p + ': ' + styles[i].rules[j][p] + ' }'
              }
            }
          }
          jsonStyles[i] += jsonRules.join(',\n');
          jsonStyles[i] += '\n    ]\n';
          jsonStyles[i] += '  }';
        }
        var json = '[\n  ' + jsonStyles.join(',') + '\n]';
        
        document.getElementById('map').style.display = "none";
        var popup = document.getElementById('json');
        popup.appendChild(document.createTextNode(json));
        popup.style.display = "block";
      }
      
      function closeJson() {
        var popup = document.getElementById('json');
        popup.removeChild(popup.childNodes[1]);
        popup.style.display = "none";
        document.getElementById('map').style.display = "block";
      }
      
      function createGeocoderControl() {
        var control = document.createElement('input');
        control.style.fontSize = '10pt';
        control.style.margin = '5px';
        control.onkeyup = submitGeocode(control);
        control.style.color = "#808080";
        control.value = "Enter location...";
        control.onfocus = function() {
          control.style.color = "#000000";
          control.value = "";
        }
        control.onblur = function() {
          control.style.color = "#808080";
          control.value = "Enter location...";
        }
        map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(control);
      }
      
      function submitGeocode(control) {
        return function(e) {
          var keyCode;
        
          if (window.event) {
            keyCode = window.event.keyCode;
          } else if (variable) {
            keyCode = e.which;
          }
        
          if (keyCode == 13) {
            geocoder.geocode( { address: control.value }, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                map.fitBounds(results[0].geometry.viewport);
              } else {
                alert("The location entered could not be found");
              }
            })
          }
        }
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
    hue.style.width = "1px";
    hue.style.top = "1px";
    hue.style.left = 1 + h + "px";
  
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
  trashcan.style.background = "url('trashcan.png')";
  trashcan.style.width = "13px";
  trashcan.style.height = "16px";
  trashcan.style.cssFloat = "right";
  trashcan.style.cursor = "pointer";
  trashcan.onclick = this.getTrashcanHandler(i);
  header.appendChild(trashcan);
  
  var panel = document.createElement('div');
  panel.setAttribute('class', 'mapStylePanel');
  
  var table = document.createElement('table');
  this.addRow(table, 'featureType', style.featureType);
  this.addRow(table, 'elementType', style.elementType);
  this.addStyle(table, 'visibility', style.rules);
  this.addStyle(table, 'hue', style.rules);
  this.addStyle(table, 'invert_lightness', style.rules);
  this.addStyle(table, 'saturation', style.rules);
  this.addStyle(table, 'lightness', style.rules);
  this.addStyle(table, 'gamma', style.rules);
  
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

MapStyleRenderer.prototype.addStyle = function(table, style_name, rules) {
  if (rules) {
    for (var i = 0; i < rules.length; i++) {
      for (var s in rules[i]) {
        if (s === style_name) {
          this.addRow(table, style_name, rules[i][s]);
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
