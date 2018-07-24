var fs = require('fs');
var Vue = require('vue');
var renderer = require('vue-server-renderer').createRenderer();
var code;
var keys;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.vue', 'utf8');
    code = new Vue({ template: str, data: {} });
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.vue', 'utf8');
    code = new Vue({ template: str, data: {} });
    done();
};

module.exports.step = function (data, done) {
    keys || (keys = Object.keys(data));
    for(var i = 0; i < keys.length; i++) code[keys[i]] = data[keys[i]];
    renderer.renderToString(code, done);
};