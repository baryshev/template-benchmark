var HTMLing = require('htmling');
var compiled;

module.exports.prepare = function (done) {
    compiled = HTMLing.file(__dirname + '/tpl_escaped.html');
    done();
};

module.exports.prepareUnescaped = function (done) {
    compiled = HTMLing.file(__dirname + '/tpl_unescaped.html');
    compiled.escape = function (x) { return x; }; // no other way to unescape everything by default
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled.render(data));
};