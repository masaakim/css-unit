
var parse = require('css-parse');

var regexp = /\d+\D+|0/;

module.exports.rm = function(str) {
  if (str.match(regexp)) {
    if (str.match(/\d+/)) {
      var num = str.match(/\d+/);
      return  +num;
    }
  }
};

module.exports.is = function(str) {
  if (str.match(regexp)) {
    if (str)
    if (str.match(/\D+/)) {
      var unit = str.match(/\D+/);
      return '' + unit;
    }
  }
};

module.exports.stats = function(css) {
  var ast = parse(css);
  ast = ast.obj.stylesheet;
  var num;
  var units = [];

  ast.rules.forEach(function visit(rule)) {
    if (rule.rules) rule.rules.forEach(visit);

    if (!rule.selectors) return;

    rule.declarations.forEach(function(declaration) {
      if (declaration.value.match(regexp)) {
        num = declaration.value.match(/\d+/);
        num = +num;

        declaration.num = num;
        declaration.unit = declaration.value.match(/\D+/);

        if (!units.indexOf(declaration.value.match(/\D+/)) && num !== 0) {
          units.push(declaration.value);
        }
        if (!units.indexOf(declaration.value.match(/\D+/)) && num === 0) {
          units.push('none');
        }
      }
    });
  }

  return {
    num: num,
    units: units,
    rules: ast.rules
  };
};
