var fs = require('fs');
var vash = require('vash');
var compiled;
var tplData;

var view = {};

module.exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl.html', 'utf8');
  tplData = data;
  vash.config.htmlEscape = true;
  compiled = vash.compile(str);
  done();
};

module.exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl.html', 'utf8');
  tplData = data;
  vash.config.htmlEscape = false;
  compiled = vash.compile(str);
  done();
};

module.exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};