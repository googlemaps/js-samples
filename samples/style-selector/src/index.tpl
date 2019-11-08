{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div id="style-selector-control"  class="map-control">
      <select id="style-selector" class="selector-control">
        <option value="default">Default</option>
        <option value="silver">Silver</option>
        <option value="night">Night mode</option>
        <option value="retro" selected="selected">Retro</option>
        <option value="hiding">Hide features</option>
      </select>
    </div>
    <div id="map"></div>
<!-- [END html-body] -->

{% endblock %}
