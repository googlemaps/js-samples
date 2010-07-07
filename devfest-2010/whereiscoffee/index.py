#!/usr/bin/python2.4

import os

from google.appengine.ext import webapp
from google.appengine.ext.webapp import template
from google.appengine.ext.webapp.util import run_wsgi_app


class MainHandler(webapp.RequestHandler):
  """Handles requests to /."""

  def get(self):
    """Handle get requests."""

    template_path = 'templates/index.tpl'
    path = os.path.join(os.path.dirname(__file__), template_path)
    output = template.render(path, {})

    self.response.headers['Content-Type'] = 'text/html'
    self.response.out.write(output)


if __name__ == '__main__':
  application = webapp.WSGIApplication([('/', MainHandler)], debug=True)
  run_wsgi_app(application)
