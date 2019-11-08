{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <!-- [START region_toolbar] -->
<!-- Add an input button to initiate the toggle method on the overlay. -->
    <div id="floating-panel">
      <input type="button" value="Toggle visibility" onclick="overlay.toggle();"></input>
      <input type="button" value="Toggle DOM attachment" onclick="overlay.toggleDOM();"></input>
    </div>
<!-- [END region_toolbar] -->
    <div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
