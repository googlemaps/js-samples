{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div style="display: none">
      <input id="pac-input"
             class="controls"
             type="text"
             placeholder="Enter a location">
    </div>
    <div id="map"></div>
    <div id="infowindow-content">
      <span id="place-name"  class="title"></span><br>
      <strong>Place ID</strong>: <span id="place-id"></span><br>
      <span id="place-address"></span>
    </div>
<!-- [END html-body] -->

{% endblock %}
