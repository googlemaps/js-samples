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
<div class="pac-card" id="pac-card">
  <div>
    <div id="title">
      Countries
    </div>
    <div id="country-selector" class="pac-controls">
      <input type="radio" name="type" id="changecountry-usa" />
      <label for="changecountry-usa">USA</label>

      <input
        type="radio"
        name="type"
        id="changecountry-usa-and-uot"
        checked="checked"
      />
      <label for="changecountry-usa-and-uot"
        >USA and unincorporated organized territories</label
      >
    </div>
  </div>
  <div id="pac-container">
    <input id="pac-input" type="text" placeholder="Enter a location" />
  </div>
</div>
<div id="map"></div>
<div id="infowindow-content">
  <img src="" width="16" height="16" id="place-icon" />
  <span id="place-name" class="title"></span><br />
  <span id="place-address"></span>
</div>
<!-- [END html-body] -->

{% endblock %}
