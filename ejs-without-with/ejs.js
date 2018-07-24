var fs = require('fs');
var ejs = require('ejs');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.ejs', 'utf8');
	compiled = ejs.compile(str, { _with: false });
	done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.ejs', 'utf8');
	compiled = ejs.compile(str, { _with: false });
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};