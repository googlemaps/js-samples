#!/bin/sh

# NOTE: requires coverage.py module
coverage -e
coverage -x geomath_test.py
coverage -x geotypes_test.py
coverage -x util_test.py
coverage -x geocell_test.py

coverage -r -m geomath.py geotypes.py util.py geocell.py
