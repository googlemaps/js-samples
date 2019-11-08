{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="style-selector-control" class="map-control">
      <input type="radio" name="show-hide" id="hide-poi"
          class="selector-control">
      <label for="hide-poi">Hide</label>
      <input type="radio" name="show-hide" id="show-poi"
          class="selector-control" checked="checked">
      <label for="show-poi">Show</label>
    </div>
    <div id="map"></div>
<!-- [END html-body] -->

{% endblock %}
