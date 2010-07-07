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

"""Unit tests for util.py."""

__author__ = 'api.roman.public@gmail.com (Roman Nurik)'

import unittest

from geo import util


class MergeInPlaceTests(unittest.TestCase):
  def test_merge_in_place(self):
    self.assertEquals([], util.merge_in_place())

    # test massive list merge
    list1 = [0, 1, 5, 6, 8, 9, 15]
    list2 = [0, 2, 3, 5, 8, 10, 11, 17]
    list3 = [1, 4, 6, 8, 10, 15, 16]
    list4 = [-1, 19]
    list5 = [20]
    list6 = []

    util.merge_in_place(list1, list2, list3, list4, list5, list6,
        dup_fn=lambda x, y: x == y)

    self.assertEquals(
        [-1, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 15, 16, 17, 19, 20],
        list1)


if __name__ == '__main__':
  unittest.main()
