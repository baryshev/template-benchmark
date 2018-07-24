var fest = require('fest');
var compiled;

module.exports.prepare = function (done) {
	var str = __dirname + '/tpl_escaped.fest';
	compiled = (new Function('return ' + fest.compile(str, {beautify: false}) ))();
	done();
};

module.exports.prepareUnescaped = function (done) {
	var str = __dirname + '/tpl_unescaped.fest';
	compiled = (new Function('return ' + fest.compile(str, {beautify: false}) ))();
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};