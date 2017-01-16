var fs = require('fs');
var nunjucks = require('nunjucks');
var tplData;
var compiled;

module.exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl.njk', 'utf8');
  tplData = data;
  nunjucks.configure({ autoescape: true });
  compiled = nunjucks.compile(str); 
  done();
};

module.exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl.njk', 'utf8');
  tplData = data;
  nunjucks.configure({ autoescape: false });
  compiled = nunjucks.compile(str);
  done();
};

module.exports.step = function (done) {
  var html = compiled.render(tplData);
  done(undefined, html);
};