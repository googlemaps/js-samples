{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <input onclick="clearMarkers();" type="button" value="Hide Markers" />
  <input onclick="showMarkers();" type="button" value="Show All Markers" />
  <input onclick="deleteMarkers();" type="button" value="Delete Markers" />
</div>
<div id="map"></div>
<p>Click on the map to add markers.</p>
<!-- [END html-body] -->
{% endblock %}
