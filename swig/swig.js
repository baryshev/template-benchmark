var swig = require('swig');
var compiled;
var tplData;

// swig.init({
// 	root: __dirname
// });
//
module.exports.prepare = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./swig/tpl_escaped.swig');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	compiled = swig.compileFile('./swig/tpl_unescaped.swig');
	done();
};

module.exports.step = function (done) {
	var html = compiled(tplData);
	done(undefined, html);
};
