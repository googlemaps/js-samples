{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="right-panel">
  <div id="inputs">
    <pre>
var origin1 = {lat: 55.930, lng: -3.118};
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = {lat: 50.087, lng: 14.421};
        </pre
    >
  </div>
  <div>
    <strong>Results</strong>
  </div>
  <div id="output"></div>
</div>
<div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
