var fs = require('fs');
var jade = require('jade');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.jade', 'utf8');
	compiled = jade.compile(str);
	done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.jade', 'utf8');
	compiled = jade.compile(str);
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};