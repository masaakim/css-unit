
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
  ast = ast.stylesheet;
  var retNum = 0;
  var retUnits = [];

  ast.rules.forEach(function visit(rule) {
    if (rule.rules) rule.rules.forEach(visit);

    if (!rule.selectors) return;

    rule.declarations.forEach(function(declaration) {
      if (declaration.value.match(regexp)) {
        var decNum = declaration.value.match(/\d+/);
        decNum = +decNum;
        retNum++;

        declaration.num = decNum;
        if (declaration.value.match(/\D+/)) {
          declaration.unit = '' + declaration.value.match(/\D+/);
        } else {
          declaration.unit = 'none';
        }

        if (retUnits.indexOf(declaration.unit) === -1) {
          retUnits.push(declaration.unit);
        }
      }
    });
  });

  return {
    num: retNum,
    units: retUnits,
    rules: ast.rules
  };
};
