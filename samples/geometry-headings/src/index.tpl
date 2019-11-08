{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="map"></div>
    <div id="floating-panel">
      Origin: <input type="text" readonly id="origin">
      Destination: <input type="text" readonly id="destination"><br>
      Heading: <input type="text" readonly id="heading"> degrees
    </div>
<!-- [END html-body] -->
{% endblock %}
