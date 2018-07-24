var fs = require('fs');
var dust = require('dustjs-linkedin');
var compiled;

module.exports.prepare = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.dust', 'utf8');
	compiled = dust.compile(str, 'test');
	dust.loadSource(compiled);
    done();
};

module.exports.prepareUnescaped = function (done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.dust', 'utf8');
	compiled = dust.compile(str, 'test');
	dust.loadSource(compiled);
    done();
};

module.exports.step = function (data, done) {
	dust.render('test', data, function(err, html) {
		done(err, html);
	});
};
