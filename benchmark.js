var data = require('./data');

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');

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
	{ name : 'Jade without `with`', sample : jadeWithoutWith },
	{ name : 'EJS', sample : ejs },
	{ name : 'Eco', sample : eco },
	{ name : 'Swig', sample : swig },
	{ name : 'doT', sample : dot },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Dust', sample : dust },
	{ name : 'ECT', sample : ect }
];

var results = [];

function showResultsPersent(label, prop) {
	var i, l, per, minVal, arr = results.slice();
	
	function log(name, val, per) {
		console.log('  ' + name + ': ' + val + 'ms - ' + per.toFixed(2) + '%');
	}
	
	arr.sort(function (a, b) { return a[prop] - b[prop]; });
	
	minVal = arr[0][prop];
	console.log(label);
	
	log(arr[0].name, minVal, 100);
	
	for (i = 1, l = arr.length; l > i; i += 1) {
		if (minVal) {
			per = (arr[i][prop] / minVal) * 100;
		} else {
			per = arr[i][prop] * 100;
		}
		
		log(arr[i].name, arr[i][prop], per);
	}
	
	console.log('');
}

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				var total = result + resultUnescaped,
					s = {
							name: name,
							escaped: result,
							unescaped: resultUnescaped,
							total: total
					};
					
				console.log(name);
				console.log('  Escaped   : ' + result + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + total + 'ms');
				console.log('');
				
				
				results.push(s);
				
				runTests();
			});
		});
	} else {
		console.log('--------------');
		showResultsPersent('Compare escaped', 'escaped');
		showResultsPersent('Compare unescaped', 'unescaped');
	}
};

console.log('Rendering ' + count + ' templates:\n');
runTests();
