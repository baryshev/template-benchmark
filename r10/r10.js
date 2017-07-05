var fs = require('fs');
var r10 = require('r10');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.r10', 'utf8');
	tplData = data;
	compiled = r10.compile(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.r10', 'utf8');
	tplData = data;
	compiled = r10.compile(str);
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};