var swig = require('swig');
var compiled;

module.exports.prepare = function (done) {
	compiled = swig.compileFile(__dirname + '/tpl_escaped.swig');
	done();
};

module.exports.prepareUnescaped = function (done) {
	compiled = swig.compileFile(__dirname + '/tpl_unescaped.swig');
	done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};
