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

"""Defines utility functions used throughout the geocell/GeoModel library."""

__author__ = 'api.roman.public@gmail.com (Roman Nurik)'

import geocell
import geomath
import geotypes


def merge_in_place(*lists, **kwargs):
  """Merges an arbitrary number of pre-sorted lists in-place, into the first
  list, possibly pruning out duplicates. Source lists must not have
  duplicates.

  Args:
    list1: The first, sorted list into which the other lists should be merged.
    list2: A subsequent, sorted list to merge into the first.
    ...
    listn:  "   "
    cmp_fn: An optional binary comparison function that compares objects across
        lists and determines the merged list's sort order.
    dup_fn: An optional binary comparison function that should return True if
        the given objects are equivalent and one of them can be pruned from the
        resulting merged list.

  Returns:
    list1, in-placed merged wit the other lists, or an empty list if no lists
    were specified.
  """
  cmp_fn = kwargs.get('cmp_fn') or cmp
  dup_fn = kwargs.get('dup_fn') or None

  if not lists:
    return []

  reverse_indices = [len(arr) for arr in lists]
  aggregate_reverse_index = sum(reverse_indices)

  while aggregate_reverse_index > 0:
    pull_arr_index = None
    pull_val = None

    for i in range(len(lists)):
      if reverse_indices[i] == 0:
        # Reached the end of this list.
        pass
      elif (pull_arr_index is not None and
            dup_fn and dup_fn(lists[i][-reverse_indices[i]], pull_val)):
        # Found a duplicate, advance the index of the list in which the
        # duplicate was found.
        reverse_indices[i] -= 1
        aggregate_reverse_index -= 1
      elif (pull_arr_index is None or
            cmp_fn(lists[i][-reverse_indices[i]], pull_val) < 0):
        # Found a lower value.
        pull_arr_index = i
        pull_val = lists[i][-reverse_indices[i]]

    if pull_arr_index != 0:
      # Add the lowest found value in place into the first array.
      lists[0].insert(len(lists[0]) - reverse_indices[0], pull_val)

    aggregate_reverse_index -= 1
    reverse_indices[pull_arr_index] -= 1

  return lists[0]


def distance_sorted_edges(cells, point):
  """Returns the edges of the rectangular region containing all of the
  given geocells, sorted by distance from the given point, along with
  the actual distances from the point to these edges.

  Args:
    cells: The cells (should be adjacent) defining the rectangular region
        whose edge distances are requested.
    point: The point that should determine the edge sort order.

  Returns:
    A list of (direction, distance) tuples, where direction is the edge
    and distance is the distance from the point to that edge. A direction
    value of (0,-1), for example, corresponds to the South edge of the
    rectangular region containing all of the given geocells.
  """
  # TODO(romannurik): Assert that lat,lon are actually inside the geocell.
  boxes = [geocell.compute_box(cell) for cell in cells]

  max_box = geotypes.Box(max([box.north for box in boxes]),
                         max([box.east for box in boxes]),
                         min([box.south for box in boxes]),
                         min([box.west for box in boxes]))
  return zip(*sorted([
      ((0,-1), geomath.distance(geotypes.Point(max_box.south, point.lon),
                                point)),
      ((0,1),  geomath.distance(geotypes.Point(max_box.north, point.lon),
                                point)),
      ((-1,0), geomath.distance(geotypes.Point(point.lat, max_box.west),
                                point)),
      ((1,0),  geomath.distance(geotypes.Point(point.lat, max_box.east),
                                point))],
      lambda x, y: cmp(x[1], y[1])))
