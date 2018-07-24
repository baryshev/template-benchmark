var fs = require('fs');
var blueimp = require("blueimp-tmpl");
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.tmpl', 'utf8');
    compiled = blueimp(str);
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.tmpl', 'utf8');
    compiled = blueimp(str);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled(data));
};