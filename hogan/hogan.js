var fs = require('fs');
var hogan = require('hogan.js');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.hogan', 'utf8');
	compiled = hogan.compile(str);
	done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.hogan', 'utf8');
	compiled = hogan.compile(str);
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled.render(data));
};