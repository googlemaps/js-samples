{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="floating-panel">
      <pre>componentRestrictions: {country: "AU", postalCode: "2000"}</pre>
      <button id="submit">Geocode</button>
    </div>
    <div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
