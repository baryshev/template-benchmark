var fs = require('fs');
var dot = require('dot');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
	compiled = dot.template(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
	compiled = dot.template(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};