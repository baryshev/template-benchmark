var fs = require('fs');
var slm = require('slm');
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.slm', 'utf8');
    compiled = slm.compile(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.slm', 'utf8');
    compiled = slm.compile(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};