{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <input id="latlng" type="text" value="40.714224,-73.961452" />
  <input id="submit" type="button" value="Reverse Geocode" />
</div>
<div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
