{% extends '../../../shared/layout.tpl'%} {% block html %}
<!-- [START html-body] -->
<div id="pano"></div>
<div id="floating-panel">
  <table>
    <tr>
      <td><b>Position</b></td>
      <td id="position-cell">&nbsp;</td>
    </tr>
    <tr>
      <td><b>POV Heading</b></td>
      <td id="heading-cell">270</td>
    </tr>
    <tr>
      <td><b>POV Pitch</b></td>
      <td id="pitch-cell">0.0</td>
    </tr>
    <tr>
      <td><b>Pano ID</b></td>
      <td id="pano-cell">&nbsp;</td>
    </tr>
    <table id="links_table"></table>
  </table>
</div>
<!-- [END html-body] -->
{% endblock %}
