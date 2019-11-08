{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <input onclick="removeLine();" type="button" value="Remove line" />
  <input onclick="addLine();" type="button" value="Restore line" />
</div>
<div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
