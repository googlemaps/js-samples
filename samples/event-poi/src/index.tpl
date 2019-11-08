{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="map"></div>
    <div id="infowindow-content">
      <img id="place-icon" src="" height="16" width="16">
      <span id="place-name"  class="title"></span><br>
      Place ID <span id="place-id"></span><br>
      <span id="place-address"></span>
    </div>
<!-- [END html-body] -->

{% endblock %}
