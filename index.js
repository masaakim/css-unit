
module.exports.rm = function(str) {
  var regexp = /\d+\D+/;
  if (str.match(regexp)) {
    if (str.match(/\d+/)) {
      var num = str.match(/\d+/);
      return '' + num;
    }
  }
};

module.exports.is = function(str) {
  var regexp = /\d+\D+/;
  if (str.match(regexp)) {
    if (str.match(/\D+/)) {
      var unit = str.match(/\D+/);
      return '' + unit;
    }
  }
};
