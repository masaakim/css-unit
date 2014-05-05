
var unit = require('./');
var test = require('tape');

var value = '50px';
var css = '.site-nav > li:hover .dropdown{position:absolute;top:37px;left:0;}';

test('unit.is', function(t) {
  var result = 'px';
  var expected = unit.is(value);

  t.equal(result, expected);

  t.end();
});

test('unit.rm', function(t) {
  var result = 50;
  var expected = unit.rm(value);

  t.equal(result, expected);

  t.end();
});

test('unit.stats', function(t) {
  var stats = unit.stats(css);

  t.equal(2, stats.num, 'stats.num');
  t.same(['px', 'none'], stats.units, 'stats.units');

  t.end();
});
