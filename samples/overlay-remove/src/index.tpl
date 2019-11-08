{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <input onclick="removeOverlay();" type="button" value="Remove overlay" />
  <input onclick="addOverlay();" type="button" value="Restore overlay" />
</div>
<div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
