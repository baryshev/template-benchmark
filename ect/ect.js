var ECT = require('ect');
var renderer;
var tpl;

renderer = new ECT({ root: __dirname, cache: true, debug: false });

module.exports.prepare = function (done) {
	tpl = 'tpl_escaped.ect';
    done();
};

module.exports.prepareUnescaped = function (done) {
	tpl = 'tpl_unescaped.ect';
    done();
};

module.exports.step = function (data, done) {
    done(null, renderer.render(tpl, data));
};