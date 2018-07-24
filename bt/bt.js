var compiled;

module.exports.prepare = function (done) {
    compiled = require('./matchers.js');
    done();
};

module.exports.prepareUnescaped = function (done) {
    compiled = require('./matchers.js');
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled.apply(require('./bemjson.js')(data)));
};