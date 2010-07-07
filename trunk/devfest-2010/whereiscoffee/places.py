#!/usr/bin/python2.4

import base64
import hmac

from google.appengine.api import urlfetch
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

import hashlib


class PlacesHandler(webapp.RequestHandler):
  """Handles requests to /places."""

  def post(self):
    """Handles posts."""
    self.response.headers['Content-Type'] = 'application/json'
    action = self.request.get('action')

    CLIENT_ID = None
    PRIVATE_KEY = None

    # These are required to work
    if not CLIENT_ID and not PRIVATE_KEY:
      self.response.out.write('{}')
      return

    places_url = None

    if action == 'search':
      location = self.request.get('location')
      radius = self.request.get('radius')

      url_to_sign = ('/maps/api/place/search/json?location=%s&radius=%s&client='
                     '%s&sensor=true') % (location, radius, CLIENT_ID)

      decoded_key = base64.urlsafe_b64decode(PRIVATE_KEY)
      signature = hmac.new(decoded_key, url_to_sign, hashlib.sha1)
      encoded_signature = base64.urlsafe_b64encode(signature.digest())

      places_url = ('http://maps.google.com/maps/api/place/search/json?'
                    'location=%s&radius=%s&client=%s&sensor=true&'
                    'signature=%s') % (location, radius, CLIENT_ID,
                                       encoded_signature)

    if places_url:
      self.response.out.write(urlfetch.fetch(places_url).content)

if __name__ == '__main__':
  application = webapp.WSGIApplication([('/places[/]?', PlacesHandler)],
                                       debug=True)
  run_wsgi_app(application)
