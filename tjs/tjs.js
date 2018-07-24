var fs = require('fs');
var templatesjs = require('templates.js');
var str;

module.exports.prepare = function (done) {
    str = fs.readFileSync(__dirname + '/tpl_escaped.tpl', 'utf8');
    done();
};

module.exports.prepareUnescaped = function (done) {
    str = fs.readFileSync(__dirname + '/tpl_unescaped.tpl', 'utf8');
    done();
};

module.exports.step = function (data, done) {
    done(null, templatesjs.parse(str, data));
};