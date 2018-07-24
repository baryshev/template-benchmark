var fs = require('fs');
var Benchpress = require('benchpressjs');
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.tpl', 'utf8');

    Benchpress.precompile({ source: str }, function (err, code) {
        if (err) {
            done(err);
            return;
        }

        compiled = Benchpress.evaluate(code);
        done();
    });
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.tpl', 'utf8');

    Benchpress.precompile({ source: str }, function (err, code) {
        if (err) {
            done(err);
            return;
        }

        compiled = Benchpress.evaluate(code);
        done();
    });
};

module.exports.step = function (data, done) {
    done(null, Benchpress.runtime(Benchpress.helpers, data, compiled));
};