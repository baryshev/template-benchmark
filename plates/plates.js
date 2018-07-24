var fs = require('fs');
var Plates = require('plates');
var str;

module.exports.prepare = function (done) {
    str = fs.readFileSync(__dirname + '/tpl_escaped.plates', 'utf8');
    done();
};

module.exports.prepareUnescaped = function (done) {
    str = fs.readFileSync(__dirname + '/tpl_unescaped.plates', 'utf8');
    done();
};

module.exports.step = function (data, done) {
    done(null, Plates.bind(str, data));
};