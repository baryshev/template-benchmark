var fs = require('fs');
var pug = require('pug');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.pug', 'utf8');
	compiled = pug.compile(str, { compileDebug: false, self: true });
	done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.pug', 'utf8');
	compiled = pug.compile(str, { compileDebug: false, self: true });
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};