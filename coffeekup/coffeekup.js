var fs = require('fs');
var coffeekup = require('coffeekup');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.coffeekup', 'utf8');
	compiled = coffeekup.compile(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.coffeekup', 'utf8');
	compiled = coffeekup.compile(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};

module.exports.stepUnescaped = function (data, done) {
    data.autoescape = true;
    done(null, compiled(data));
};