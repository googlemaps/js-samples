#!/usr/bin/python2.5
#
# Copyright 2009 Roman Nurik
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Unit tests for geotypes.py."""

__author__ = 'api.roman.public@gmail.com (Roman Nurik)'

import unittest

from geo import geotypes


class PointTests(unittest.TestCase):
  def test_Point(self):
    # an invalid point
    self.assertRaises(ValueError, geotypes.Point, 95, 0)
    self.assertRaises(ValueError, geotypes.Point, 0, 185)

    # a valid point
    point = geotypes.Point(37, -122)
    self.assertEquals(37, point.lat)
    self.assertEquals(-122, point.lon)

    self.assertTrue(isinstance(point.__str__(), str))

    self.assertEquals(geotypes.Point(37, -122), geotypes.Point(37, -122))
    self.assertNotEquals(geotypes.Point(37, -122), geotypes.Point(0, 0))

class BoxTests(unittest.TestCase):
  def test_Box(self):
    # an invalid box
    self.assertRaises(ValueError, geotypes.Box, 95, 0, 0, 0)

    # a valid box
    box = geotypes.Box(37, -122, 34, -125)
    self.assertEquals(37, box.north)
    self.assertEquals(34, box.south)
    self.assertEquals(-122, box.east)
    self.assertEquals(-125, box.west)

    # assert north can't be under south
    self.assertRaises(ValueError, box._set_north, 32)
    self.assertRaises(ValueError, box._set_south, 39)

    self.assertTrue(isinstance(box.__str__(), str))

    # valid boxes
    self.assertEquals(
        geotypes.Box(37, -122, 34, -125),
        geotypes.Box(34, -122, 37, -125))


if __name__ == '__main__':
  unittest.main()
