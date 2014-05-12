
var fs = require('fs');
var unit = require('../');
var test = require('colored-tape');

function fixture (name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf-8').trim();
}

var value = '50px';
var css = fixture('units');

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

  var result = stats.units;
  var expected  = [
    'px', 'ex', 'em',
    'cm', 'mm', 'in', 'pt', 'pc',
    'vw', 'vh', 'vmin',
    '%', 'none'
  ];

  t.equal(13, stats.num, 'stats.num');
  t.same(result, expected, 'stats.units');

  t.end();
});
