var fs = require('fs');
var slm = require('slm');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.slm', 'utf8');
  tplData = data;
  compiled = slm.compile(str);
  done();
};

module.exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.slm', 'utf8');
  tplData = data;
  compiled = slm.compile(str);
  done();
};

module.exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
