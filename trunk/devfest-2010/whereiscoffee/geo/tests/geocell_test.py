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

"""Unit tests for geocell.py."""

__author__ = 'api.roman.public@gmail.com (Roman Nurik)'

import unittest

from geo import geocell
from geo import geotypes


class GeocellTests(unittest.TestCase):
  def test_compute(self):
    # a valid geocell
    cell = geocell.compute(geotypes.Point(37, -122), 14)
    self.assertEqual(14, len(cell))
    self.assertTrue(geocell.is_valid(cell))
    self.assertTrue(geocell.contains_point(cell, geotypes.Point(37, -122)))

    # a lower resolution cell should be a prefix to a higher resolution
    # cell containing the same point
    lowres_cell = geocell.compute(geotypes.Point(37, -122), 8)
    self.assertTrue(cell.startswith(lowres_cell))
    self.assertTrue(geocell.contains_point(lowres_cell,
                                          geotypes.Point(37, -122)))

    # an invalid geocell
    cell = geocell.compute(geotypes.Point(0, 0), 0)
    self.assertEqual(0, len(cell))
    self.assertFalse(geocell.is_valid(cell))

  def test_compute_box(self):
    cell = geocell.compute(geotypes.Point(37, -122), 14)
    box = geocell.compute_box(cell)

    self.assertTrue(box.south <= 37 and 37 <= box.north and
                    box.west <= -122 and -122 <= box.east)

  def test_adjacent(self):
    cell = geocell.compute(geotypes.Point(37, -122), 14)
    box = geocell.compute_box(cell)

    # adjacency tests using bounding boxes
    self.assertEquals(box.north,
        geocell.compute_box(geocell.adjacent(cell, (0, 1))).south)
    self.assertEquals(box.south,
        geocell.compute_box(geocell.adjacent(cell, (0, -1))).north)
    self.assertEquals(box.east,
        geocell.compute_box(geocell.adjacent(cell, (1, 0))).west)
    self.assertEquals(box.west,
        geocell.compute_box(geocell.adjacent(cell, (-1, 0))).east)

    self.assertEquals(8, len(geocell.all_adjacents(cell)))

    # also test collinearity
    self.assertTrue(
        geocell.collinear(cell, geocell.adjacent(cell, (0, 1)), True))
    self.assertFalse(
        geocell.collinear(cell, geocell.adjacent(cell, (0, 1)), False))
    self.assertTrue(
        geocell.collinear(cell, geocell.adjacent(cell, (1, 0)), False))
    self.assertFalse(
        geocell.collinear(cell, geocell.adjacent(cell, (1, 0)), True))

  def test_interpolation(self):
    cell = geocell.compute(geotypes.Point(37, -122), 14)
    sw_adjacent = geocell.adjacent(cell, (-1, -1))
    sw_adjacent2 = geocell.adjacent(sw_adjacent, (-1, -1))

    # interpolate between a cell and south-west adjacent, should return
    # 4 total cells
    self.assertEquals(4, len(geocell.interpolate(cell, sw_adjacent)))
    self.assertEquals(4, geocell.interpolation_count(cell, sw_adjacent))

    # interpolate between a cell and the cell SW-adjacent twice over,
    # should return 9 total cells
    self.assertEquals(9, len(geocell.interpolate(cell, sw_adjacent2)))
    self.assertEquals(9, geocell.interpolation_count(cell, sw_adjacent2))


if __name__ == '__main__':
  unittest.main()
