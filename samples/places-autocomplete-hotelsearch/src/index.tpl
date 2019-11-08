{% extends '../../../shared/layout.tpl'%}
{% block html %}
<!-- [START html-body] -->
    <div class="hotel-search">
      <div id="findhotels">
        Find hotels in:
      </div>

      <div id="locationField">
        <input id="autocomplete" placeholder="Enter a city" type="text" />
      </div>

      <div id="controls">
        <select id="country">
          <option value="all">All</option>
          <option value="au">Australia</option>
          <option value="br">Brazil</option>
          <option value="ca">Canada</option>
          <option value="fr">France</option>
          <option value="de">Germany</option>
          <option value="mx">Mexico</option>
          <option value="nz">New Zealand</option>
          <option value="it">Italy</option>
          <option value="za">South Africa</option>
          <option value="es">Spain</option>
          <option value="pt">Portugal</option>
          <option value="us" selected>U.S.A.</option>
          <option value="uk">United Kingdom</option>
        </select>
      </div>
    </div>

    <div id="map"></div>

    <div id="listing">
      <table id="resultsTable">
        <tbody id="results"></tbody>
      </table>
    </div>

    <div style="display: none">
      <div id="info-content">
        <table>
          <tr id="iw-url-row" class="iw_table_row">
            <td id="iw-icon" class="iw_table_icon"></td>
            <td id="iw-url"></td>
          </tr>
          <tr id="iw-address-row" class="iw_table_row">
            <td class="iw_attribute_name">Address:</td>
            <td id="iw-address"></td>
          </tr>
          <tr id="iw-phone-row" class="iw_table_row">
            <td class="iw_attribute_name">Telephone:</td>
            <td id="iw-phone"></td>
          </tr>
          <tr id="iw-rating-row" class="iw_table_row">
            <td class="iw_attribute_name">Rating:</td>
            <td id="iw-rating"></td>
          </tr>
          <tr id="iw-website-row" class="iw_table_row">
            <td class="iw_attribute_name">Website:</td>
            <td id="iw-website"></td>
          </tr>
        </table>
      </div>
    </div>
<!-- [END html-body] -->

{% endblock %}
