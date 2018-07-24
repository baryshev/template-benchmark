var fs = require('fs');
var r10 = require('r10');
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.r10', 'utf8');
    compiled = r10.compile(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.r10', 'utf8');
    compiled = r10.compile(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};