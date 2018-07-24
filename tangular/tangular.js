var fs = require('fs');
var Tangular = require('tangular');
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.html', 'utf8');
    compiled = Tangular.compile(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.html', 'utf8');
    compiled = Tangular.compile(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};