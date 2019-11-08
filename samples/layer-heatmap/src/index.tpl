{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <button onclick="toggleHeatmap()">Toggle Heatmap</button>
  <button onclick="changeGradient()">Change gradient</button>
  <button onclick="changeRadius()">Change radius</button>
  <button onclick="changeOpacity()">Change opacity</button>
</div>
<div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
