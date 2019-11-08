{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="floating-panel">
      <input type="button" value="Toggle Street View" onclick="toggleStreetView();"></input>
    </div>
    <div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
