
from google.appengine.ext import db
from geo import geomodel
from geo import geotypes

class Shop(geomodel.GeoModel):
  name = db.StringProperty(required=True)
  address = db.TextProperty(required=True)
  rating = db.IntegerProperty()
  added_by = db.UserProperty(auto_current_user=True, auto_current_user_add=True)

  def _GetLatitude(self):
    return self.location.lat if self.location else None

  def _SetLatitude(self, lat):
    if not self.location:
      self.location = db.GeoPt()

    self.location.lat = lat

  latitude = property(_GetLatitude, _SetLatitude)

  def _GetLongitude(self):
    return self.location.lon if self.location else None

  def _SetLongitude(self, lon):
    if not self.location:
      self.location = db.GeoPt()

    self.location.lon = lon

  longitude = property(_GetLongitude, _SetLongitude)

  @classmethod
  def add(self, **kwargs):
    lat = float(kwargs['lat'])
    lng = float(kwargs['lng'])
    location = db.GeoPt(lat, lng)
    name = kwargs['name']
    address = kwargs['address']
    rating = kwargs['rating']

    try:
      rating = int(rating)
    except ValueError:
      rating = 0

    new_shop = Shop(name=name, address=address, location=location,
                    rating=rating)
    new_shop.update_location()
    new_shop.put()
    return new_shop

  @classmethod
  def query(self, sw_lat, sw_lng, ne_lat, ne_lng, max_results=1000):
    bounds = geotypes.Box(float(ne_lat),
                          float(ne_lng),
                          float(sw_lat),
                          float(sw_lng))

    base_query = Shop.all()

    return Shop.bounding_box_fetch(base_query, bounds, max_results)
