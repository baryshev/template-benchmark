var fs = require('fs');
var markoCompiler = require('marko/compiler');
markoCompiler.configure({ writeToDisk: false });
var marko = require('marko');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	compiled = marko.load(require.resolve('./tpl_escaped.marko'));
	tplData = data;
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	compiled = marko.load(require.resolve('./tpl_unescaped.marko'));
	tplData = data;
	done();
};

module.exports.step = function (done) {
	var html = compiled.renderSync(tplData).toString();
	done(undefined, html);
};