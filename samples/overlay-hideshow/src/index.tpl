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
<!-- [START region_toolbar] -->
<!-- Add an input button to initiate the toggle method on the overlay. -->
<div id="floating-panel">
  <input type="button" value="Toggle visibility" onclick="overlay.toggle();" />
  <input
    type="button"
    value="Toggle DOM attachment"
    onclick="overlay.toggleDOM();"
  />
</div>
<!-- [END region_toolbar] -->
<div id="map"></div>
<!-- [END html-body] -->
{% endblock %}
