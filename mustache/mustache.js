var fs = require('fs');
var mustache = require('mustache');
var str;

module.exports.prepare = function (done) {
    str = fs.readFileSync(__dirname + '/tpl_escaped.mustache', 'utf8');
    mustache.parse(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
    str = fs.readFileSync(__dirname + '/tpl_unescaped.mustache', 'utf8');
    mustache.parse(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, mustache.render(str, data));
};