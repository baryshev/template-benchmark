var fs = require('fs');
var vash = require('vash');
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl.html', 'utf8');
    vash.config.htmlEscape = true;
    compiled = vash.compile(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl.html', 'utf8');
    vash.config.htmlEscape = false;
    compiled = vash.compile(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};