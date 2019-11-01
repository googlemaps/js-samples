#!/usr/bin/python
"""
 implementation of https://en.wikipedia.org/wiki/Geohash

 This module was written in May 2008 by Schuyler Erle and is made
 available in the public domain. Cheers to Christopher Schmidt for
 suggesting it. Works in Python 2.3 and up. Run it on the command
 line to try the doctests. Please send patches, comments, etc. to
 schuyler@geocoder.us.

 You can instantiate a Geohash object with a (lon,lat) tuple, or with
 a string. The bbox() and point() methods return the bounding box
 and the center point of the area indicated by the geohash. Casting
 the Geohash object to a string gives the hash itself.

 Adding two Geohash objects together gives the Geohash of their
 minimal bounding box.

 The Geohash class inherits from a Geostring class, which provides an
 identical API, but returns strings consisting of interleaved 0 and
 1 bits.  Geostring is a less compact representation than the Geohash
 class, but *much* more suitable for use when storing and comparing
 bounding boxes in a B-Tree or similar index.  If you are storing
 bounding boxes in a database and space is not a major concern, you
 should use the Geostring class instead of the Geohash.

>>> hash = Geohash((-0.25, 51.5))
>>> str(hash)
'gcpufr3cnxf6q'
>>> hash.bbox()
(-0.25, 51.5, -0.25, 51.5)
>>> hash.point()
(-0.25, 51.5)
>>> hash.bbox(4)
(-0.35156300000000001, 51.328125, 0.0, 51.503906000000001)

*** note, floating point representations are weird
>>> -0.35156300000000001 == -0.351563
True

>>> hash = Geohash('9q8yykc03ycmh')
>>> hash.bbox()
(-122.41920399999999, 37.775196000000001, -122.41920399999999, 37.775196000000001)
>>> hash.point()
(-122.41920399999999, 37.775196000000001)
>>> hash.bbox(3)
(-123.75, 36.5625, -120.9375, 37.96875)
>>> union = hash + Geohash('9q8yze443z')
>>> str(union)
'9q8y'

*** see note above
>>> -122.419204 == -122.41920399999999
True

A degenerate example, but at least it works lexically:

>>> hash = Geoindex((-0.25,51.5),depth=8)
>>> str(hash)
'0222202022202022'
>>> hash.bbox()
(-1.40625, 51.328125, 0.0, 52.03125)
>>> hash2 = Geoindex((0.25,52.5),depth=8)
>>> str(hash2)
'2202000002000200'
>>> str(hash+hash2)
'1111111111111111'
>>> str(hash+hash2) > str(hash)
True
>>> str(hash+hash2) < str(hash2)
True

>>> hash = Geostring((-0.25,51.5),depth=8)
>>> str(hash)
'0111101011101011'
>>> hash.bbox()
(-1.40625, 51.328125, 0.0, 52.03125)

Some degenerate cases:

>>> west = Geostring("0")
>>> west.bbox()
(-180.0, -90.0, 0.0, 90.0)
>>> east = Geostring("1")
>>> east.bbox()
(0.0, -90.0, 180.0, 90.0)
>>> str(east+west)
''
>>> (east+west).bbox()
(-180.0, -90.0, 180.0, 90.0)
"""

class Geostring (object):
    def _to_bits (cls,f,depth=32):
        f *= (1L << depth)
        return [(long(f) >> (depth-i)) & 1 for i in range(1,depth+1)]
    _to_bits = classmethod(_to_bits)

    def bitstring (cls,(x,y),bound=(-180,-90,180,90),depth=32):
        x = cls._to_bits((x-bound[0])/float(bound[2]-bound[0]),depth)
        y = cls._to_bits((y-bound[1])/float(bound[3]-bound[1]),depth)
        bits = reduce(lambda x,y:x+list(y), zip(x,y), [])
        return "".join(map(str,bits))
    bitstring = classmethod(bitstring)

    def __init__ (self, data, bound=(-180,-90,180,90), depth=32):
        self.bound  = bound
        self.depth  = depth
        self.origin = bound[0:2]
        self.size   = (bound[2]-bound[0], bound[3]-bound[1])
        if isinstance(data,tuple) or isinstance(data,list):
            self.hash = self.bitstring(data,bound,depth)
        else:
            self.hash = data

    def __str__ (self):
        return self.hash

    def _to_bbox (self, bits):
        depth = len(bits)/2
        minx = miny = 0.0
        maxx = maxy = 1.0
        for i in range(depth+1):
            try:
                minx += float(bits[i*2])/(2L<<i)
                miny += float(bits[i*2+1])/(2L<<i)
            except IndexError:
                pass
        if depth:
            maxx = minx + 1.0/(2L<<(depth-1))
            maxy = miny + 1.0/(2L<<(depth-1))
        elif len(bits) == 1:
            # degenerate case
            maxx = min(minx + .5, 1.0)
        minx, maxx = [self.origin[0]+x*self.size[0] for x in (minx,maxx)] 
        miny, maxy = [self.origin[1]+y*self.size[1] for y in (miny,maxy)] 
        return tuple([round(x,6) for x in minx, miny, maxx, maxy])

    def bbox (self, prefix=None):
        if not prefix: prefix=len(self.hash)
        return self._to_bbox(self.hash[:prefix])

    def point (self,prefix=None):
        minx, miny, maxx, maxy = self.bbox(prefix)
        return (minx+maxx)/2.0, (miny+maxy)/2.0

    def union (self,other):
        other = str(other)
        hash  = self.hash
        for i in range(min(len(self.hash),len(other))):
            if self.hash[i] != other[i]:
                hash = self.hash[:i]
                break
        return type(self)(hash,self.bound,self.depth)

    __add__ = union

class Geoindex (Geostring):
    def bitstring (cls,coord,bound=(-180,-90,180,90),depth=32):
        bits = Geostring.bitstring(coord,bound,depth)
        bits = bits.replace("1","2")
        bits += "1" * (depth*2 - len(bits))
        return bits
    bitstring = classmethod(bitstring)

    def bbox (self, prefix=None):
        bits = self.hash.replace("1","").replace("2","1")
        if not prefix: prefix=len(bits)
        return self._to_bbox(bits[:prefix])

    def union (self,other):
        other = str(other)
        hash  = self.hash
        for i in range(min(len(self.hash),len(other))):
            if self.hash[i] != other[i]:
                hash = self.hash[:i] + ("1" * (self.depth*2-i))
                break
        return type(self)(hash,self.bound,self.depth)

    __add__ = union

class Geohash (Geostring):
    BASE_32 = "0123456789bcdefghjkmnpqrstuvwxyz"

    def bitstring (cls,coord,bound=(-180,-90,180,90),depth=32):
        bits = Geostring.bitstring(coord,bound,depth)
        hash = ""
        for i in range(0,len(bits),5):
            m = sum([int(n)<<(4-j) for j,n in enumerate(bits[i:i+5])])
            hash += cls.BASE_32[m]
        return hash
    bitstring = classmethod(bitstring)

    def bbox (self,prefix=None):
        if not prefix: prefix=len(self.hash)
        bits = [[n>>(4-i)&1 for i in range(5)]
                    for n in map(self.BASE_32.find, self.hash[:prefix])]
        bits = reduce(lambda x,y:x+y, bits, [])
        return self._to_bbox(bits)

if __name__ == "__main__":
    import sys
    if len(sys.argv) == 1:
        import doctest
        doctest.testmod(verbose=True)
    elif len(sys.argv) == 2:
        print Geohash(sys.argv[1]).bbox()
    else:
        print Geohash(map(float, sys.argv[1:3]))
