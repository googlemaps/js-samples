#!/usr/bin/python2.4

from django.utils import simplejson

from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

import models


class StoresHandler(webapp.RequestHandler):
  """Handles requests to /stores."""

  def _Search(self, bounds):
    shops = None
    parts = bounds.split(',')
    if len(parts) is 4:
      sw_lat = float(parts[0])
      sw_lng = float(parts[1])
      ne_lat = float(parts[2])
      ne_lng = float(parts[3])
      shops = models.Shop.query(sw_lat, sw_lng, ne_lat, ne_lng)
    output = []
    if shops:
      for shop in shops:
        output.append({
            'name': shop.name,
            'key': str(shop.key()),
            'lat': shop.location.lat,
            'lng': shop.location.lon
        })
    return output

  def _Load(self, key):
    shop = models.Shop.get(key)
    shop_info = {
        'key': key,
        'name': shop.name,
        'address': shop.address,
        'rating': shop.rating,
        'lat': shop.location.lat,
        'lng': shop.location.lon
    }
    return shop_info

  def get(self):
    """Handle the get requests."""
    self.response.headers['Content-Type'] = 'text/html'
    action = self.request.get('action')
    jsonp = self.request.get('jsonp')

    json = ''
    if action == 'search':
      bounds = self.request.get('bounds')
      json = simplejson.dumps(self._Search(bounds))

    if action == 'load':
      key = self.request.get('key')
      json = simplejson.dumps(self._Load(key))

    if jsonp:
      self.response.out.write('%s(%s)' % (jsonp, json))
    else:
      self.response.out.write(json)

  def post(self):
    """Handle requests via post."""
    self.response.headers['Content-Type'] = 'application/json'
    action = self.request.get('action')

    json = ''
    if action == 'new':
      name = self.request.get('name')
      address = self.request.get('address')
      rating = self.request.get('rating')
      lat = self.request.get('lat')
      lng = self.request.get('lng')

      shop = models.Shop.add(name=name, address=address, lat=lat, lng=lng,
                             rating=rating)
      output = {
          'name': shop.name,
          'key': str(shop.key()),
          'lat': shop.location.lat,
          'lng': shop.location.lon
      }
      json = simplejson.dumps(output)

    if action == 'search':
      bounds = self.request.get('bounds')
      json = simplejson.dumps(self._Search(bounds))

    if action == 'load':
      key = self.request.get('key')
      json = simplejson.dumps(self._Load(key))

    self.response.out.write(json)

if __name__ == '__main__':
  application = webapp.WSGIApplication([('/stores[/]?', StoresHandler)],
                                       debug=True)
  run_wsgi_app(application)
