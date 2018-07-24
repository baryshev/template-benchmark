var fs = require('fs');
var Handlebars = require('handlebars');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.handlebars', 'utf8');
	compiled = Handlebars.compile(str);
	done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.handlebars', 'utf8');
	compiled = Handlebars.compile(str);
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};