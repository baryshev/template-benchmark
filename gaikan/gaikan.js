var gaikan = require('gaikan');
var compiled;

module.exports.prepare = function (done) {
	compiled = gaikan.compileFromFile(__dirname + '/tpl_escaped.html');
	done();
};

module.exports.prepareUnescaped = function (done) {
	compiled = gaikan.compileFromFile(__dirname + '/tpl_unescaped.html');
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(gaikan, data));
};