<!DOCTYPE html>
<html>
  <head>
    <title>Where is Coffee?</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no"/>
    {% include "styles.tpl" %}
    {% include "javascript.tpl" %}
  </head>
  <body>
    <div id="header">
     <a href="#" id="my-location" class="button button-left"><span>&bull;</span></a>
      <h1>Where is Coffee?</h1>
    </div>
    <div id="content">
      <div id="info"></div>
      <div id="map"></div>
      <div id="footer">
        <a href="#" class="button button-both" id="add-new">Add a Shop</a>
      </div>
    </div>
  </body>
</html>
