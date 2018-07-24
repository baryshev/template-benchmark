var fs = require('fs');
var eco = require('eco');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.eco', 'utf8');
	compiled = eco.compile(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.eco', 'utf8');
	compiled = eco.compile(str);
    done();
};

module.exports.step = function (data, done) {
	done(null, compiled(data));
};