{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div class="pac-card" id="pac-card">
  <div>
    <div id="title">
      Countries
    </div>
    <div id="country-selector" class="pac-controls">
      <input type="radio" name="type" id="changecountry-usa" />
      <label for="changecountry-usa">USA</label>

      <input
        type="radio"
        name="type"
        id="changecountry-usa-and-uot"
        checked="checked"
      />
      <label for="changecountry-usa-and-uot"
        >USA and unincorporated organized territories</label
      >
    </div>
  </div>
  <div id="pac-container">
    <input id="pac-input" type="text" placeholder="Enter a location" />
  </div>
</div>
<div id="map"></div>
<div id="infowindow-content">
  <img src="" width="16" height="16" id="place-icon" />
  <span id="place-name" class="title"></span><br />
  <span id="place-address"></span>
</div>
<!-- [END html-body] -->

{% endblock %}
