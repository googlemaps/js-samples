{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="floating-panel">
  <!-- Supply a default place ID for a place in Brooklyn, New York. -->
  <input id="place-id" type="text" value="ChIJd8BlQ2BZwokRAFUEcm_qrcA" />
  <input id="submit" type="button" value="Get Address for Place ID" />
</div>
<div id="map"></div>
<!-- [END html-body] -->

{% endblock %}
