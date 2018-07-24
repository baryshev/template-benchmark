var fs = require('fs');
var svelte = require('svelte');
var str;

require('svelte/ssr/register');

module.exports.prepare = function (done) {
    str = require('./tpl_escaped.html');
    done();
};

module.exports.prepareUnescaped = function (done) {
    str = require('./tpl_unescaped.html');
    done();
};

module.exports.step = function (data, done) {
    done(null, str.render(data));
};