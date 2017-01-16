var fs = require('fs');
var mustache = require('mustache');
var tpl;
var tplData;

var view = {};

module.exports.prepare = function (data, done) {
  tpl = fs.readFileSync(__dirname + '/tpl_escaped.mustache', 'utf8');
  tplData = data;
  done();
};

module.exports.prepareUnescaped = function (data, done) {
  tpl = fs.readFileSync(__dirname + '/tpl_unescaped.mustache', 'utf8');
  tplData = data;
  done();
};

module.exports.step = function (done) {
  var html = mustache.render(tpl, tplData);
  done(undefined, html);
};