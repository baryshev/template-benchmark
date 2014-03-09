var data = require('./data');

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');
var gaikan = require('./gaikan/gaikan.js');

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [

	{ name : 'Jade', sample : jade },
	{ name : 'CoffeeKup', sample : coffeekup },
	{ name : 'Jade without `with`', sample : jadeWithoutWith },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'EJS', sample : ejs },
	{ name : 'Eco', sample : eco },
	{ name : 'Underscore', sample : underscore },
	{ name : 'Swig', sample : swig },
	{ name : 'doT', sample : dot },
	{ name : 'EJS without `with`', sample : ejsWithoutWith },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Dust', sample : dust },
	{ name : 'Gaikan', sample: gaikan },
	{ name : 'ECT', sample : ect },
];

var results = [];
var pad = function (val, num, pre) {
	val = typeof val === 'string' ? val : '' + val;
	while (val.length < num) val = (pre ? ' ' : '') + val + (pre ? '' : ' ');
	return val;
};
var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				console.log(name);
				console.log('  Escaped   : ' + result + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + (result + resultUnescaped) + 'ms');
				console.log('');
				results.push({
					name: name,
					escaped: result,
					unescaped: resultUnescaped,
					total: result + resultUnescaped
				});
				runTests();
			});
		});
	} else {
		console.log('Performance report for ' + count + ' templates (' + process.platform + '):\n');
		results.sort(function (a, b) {
			var x = a.total;
			var y = b.total;
			return x < y ? -1 : (x > y ? 1 : 0);
		});
		var fastest = results[0].total;
		for (var i = 0; i < results.length; i += 1) {
			var result = results[i];
			var percentage = Math.round((100 / fastest * result.total) - 100);
			console.log(pad(result.name, 20) +
				' (' + pad(result.total, 5, true) + 'ms)' +
				(i == 0 ? ' - fastest' : ' - ' + percentage + '% slower'));
		}
	}
};

console.log('Rendering ' + count + ' templates:\n');
runTests();
