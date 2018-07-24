var Factory = require('fte.js').Factory;

var comp = new Factory({
    root: 'fte',
    debug: false
});

var compiled;

module.exports.prepare = function (done) {
    compiled = 'tpl_escaped.nhtml';
    done();
};

module.exports.prepareUnescaped = function (done) {
    compiled = 'tpl_unescaped.nhtml';
    done();
};

module.exports.step = function (data, done) {
    done(null, comp.run(data, compiled));
};