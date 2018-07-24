var nunjucks = require('nunjucks');
var fs = require('fs');
var compiled;

module.exports.prepare = function (done) {
    var string = String(fs.readFileSync(__dirname + '/tpl_escaped.njk'));
    compiled = nunjucks.compile(string);
    done();
};

module.exports.prepareUnescaped = function (done) {
    var string = String(fs.readFileSync(__dirname + '/tpl_unescaped.njk'));
    compiled = nunjucks.compile(string);
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled.render(data));
};
