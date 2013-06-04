var egs = require('egs');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
  var template = egs.fromFile(__dirname + '/tpl_escaped.egs', { cache: true });
	tplData = data;
  template.ready().then(
    function () {
      compiled = template.sync;
      done();
    },
    function (e) {
      done(e);
    });
};

module.exports.prepareUnescaped = function (data, done) {
  var template = egs.fromFile(__dirname + '/tpl_unescaped.egs', { cache: true });
	tplData = data;
  template.ready().then(
    function () {
      compiled = template.sync;
      done();
    },
    function (e) {
      done(e);
    });
};

module.exports.step = function (done) {
  var html = compiled(tplData);
	done(null, html);
};
