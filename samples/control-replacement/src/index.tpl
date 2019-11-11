<!--
Copyright 2019 Google LLC. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="map"></div>
<!-- Hide controls until they are moved into the map. -->
<div style="display:none">
  <div class="controls zoom-control">
    <button class="zoom-control-in" title="Zoom In">+</button>
    <button class="zoom-control-out" title="Zoom Out">−</button>
  </div>
  <div class="controls maptype-control maptype-control-is-map">
    <button class="maptype-control-map" title="Show road map">Map</button>
    <button class="maptype-control-satellite" title="Show satellite imagery">
      Satellite
    </button>
  </div>
  <div class="controls fullscreen-control">
    <button title="Toggle Fullscreen">
      <div class="fullscreen-control-icon fullscreen-control-top-left"></div>
      <div class="fullscreen-control-icon fullscreen-control-top-right"></div>
      <div class="fullscreen-control-icon fullscreen-control-bottom-left"></div>
      <div
        class="fullscreen-control-icon fullscreen-control-bottom-right"
      ></div>
    </button>
  </div>
</div>
<!-- [END html-body] -->

{% endblock %}
