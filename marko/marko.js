//var fs = require('fs');
//var markoCompiler = require('marko/compiler');
//markoCompiler.configure({ writeToDisk: false });
var marko = require('marko');
var compiled;

module.exports.prepare = function (done) {
    compiled = marko.load(require.resolve('./tpl_escaped.marko'));
    done();
};

module.exports.prepareUnescaped = function (done) {
    compiled = marko.load(require.resolve('./tpl_unescaped.marko'));
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled.renderSync(data).toString());
};