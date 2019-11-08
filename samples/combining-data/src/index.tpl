{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="controls" class="nicebox">
      <div>
      <select id="census-variable">
        <option value="https://storage.googleapis.com/mapsdevsite/json/DP02_0066PE">Percent of population over 25 that completed high
        school</option>
        <option value="https://storage.googleapis.com/mapsdevsite/json/DP05_0017E">Median age</option>
        <option value="https://storage.googleapis.com/mapsdevsite/json/DP05_0001E">Total population</option>
        <option value="https://storage.googleapis.com/mapsdevsite/json/DP02_0016E">Average family size</option>
        <option value="https://storage.googleapis.com/mapsdevsite/json/DP03_0088E">Per-capita income</option>
      </select>
      </div>
      <div id="legend">
        <div id="census-min">min</div>
        <div class="color-key"><span id="data-caret">&#x25c6;</span></div>
        <div id="census-max">max</div>
      </div>
    </div>
    <div id="data-box" class="nicebox">
      <label id="data-label" for="data-value"></label>
      <span id="data-value"></span>
    </div>
    <div id="map"></div>
<!-- [END html-body] -->

{% endblock %}
