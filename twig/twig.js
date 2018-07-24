var fs = require('fs');
var Twig = require('twig');
var compiled;

module.exports.prepare = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_escaped.twig', 'utf8');

    compiled = Twig.twig({
        id: 'tpl_escaped',
        data: str,
        allowInlineIncludes: false,
        rethrow: false,
        autoescape: false,
    });
    done();
};

module.exports.prepareUnescaped = function (done) {
    var str = fs.readFileSync(__dirname + '/tpl_unescaped.twig', 'utf8');

    compiled = Twig.twig({
        id: 'tpl_unescaped',
        data: str,
        allowInlineIncludes: false,
        rethrow: false,
        autoescape: false,
    });
    done();
};

module.exports.step = function (data, done) {
    done(null, compiled.render(data));
};