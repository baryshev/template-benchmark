process.env.NODE_ENV = "production";
var data = require('./data');
var pad = require('pad');

var count = 10000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var jade = require('./jade/jade.js');
var jadeWithoutWith = require('./jade-without-with/jade.js');
var pug = require('./pug/pug.js');
var pugWithoutWith = require('./pug-without-with/pug.js');
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
var marko = require('./marko/marko.js');
var r10 = require('./r10/r10.js');
var mustache = require('./mustache/mustache.js');
var vash = require('./vash/vash.js');
var nunjucks = require('./nunjucks/nunjucks.js');
var tangular = require('./tangular/tangular.js');
var benchpress = require('./benchpress/benchpress.js');
var templatesjs = require('./tjs/tjs.js');
var twig = require('./twig/twig.js');
var htmling = require('./htmling/htmling.js');
var svelte = require('./svelte/svelte.js');
var vue = require('./vue/vue.js');
var slm = require('./slm/slm.js');
var bt = require('./bt/bt.js');
var bh = require('./bh/bh.js');
var lodash = require('./lodash/lodash.js');
var plates = require('./plates/plates.js');
var blueimp = require('./blueimp/blueimp.js');
var xtpl = require('./xtpl/xtpl.js');
var fte = require('./fte/fte.js');

/*
    TODO: has issues:
    -----------------
    egs
    ant.js
    art-template
    reactive
    domly
    nai
*/

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var rnd;
	var done = function(error, html) {
		i++;
		if (i === count) {
            var diff = process.hrtime(start);
            if(!checkResult(html, rnd)) throw new Error('Result incorrect: ' + name);
            cb(null, name, diff);
		}
	}
	sample.prepare(function() {
		start = process.hrtime();
		for (var j = 0; j < count; j++) {
			sample.step(data(rnd = Math.random()), done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
    var rnd;
	var done = function(error, html) {
		i++;
		if (i === count) {
            var diff = process.hrtime(start);
            if(!checkResult(html, rnd)) throw new Error('Result incorrect: ' + name);
            cb(null, name, diff);
		}
	}
	sample.prepareUnescaped(function() {
		start = process.hrtime();
		for (var j = 0; j < count; j++) {
			sample.step(data(rnd = Math.random()), done);
		}
	});
};

var samples = [

	{ name : 'Jade', sample : jade },
    { name : 'Jade without `with`', sample : jadeWithoutWith },
    { name : 'Pug', sample : pug },
    { name : 'Pug without `with`', sample : pugWithoutWith },
    { name : 'Handlebars', sample : handlebars },
    { name : 'Gaikan', sample: gaikan },
    { name : 'ECT', sample : ect },
	{ name : 'EJS', sample : ejs },
    { name : 'EJS without `with`', sample : ejsWithoutWith },
    { name : 'Eco', sample : eco },
    { name : 'Marko', sample : marko },
    { name : 'R10', sample: r10 },
    { name : 'Mustache', sample : mustache },
    { name : 'Vash', sample : vash },
    { name : 'Nunjucks', sample : nunjucks },
    { name : 'Tangular', sample: tangular },
    { name : 'Benchpress', sample : benchpress },
    { name : 'CoffeeKup', sample : coffeekup },
	{ name : 'Underscore', sample : underscore },
	{ name : 'doT', sample : dot },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan', sample : hogan },
	{ name : 'Dust', sample : dust },
    { name : 'Swig', sample : swig },
    { name : 'Templates.js', sample: templatesjs },
    { name:  'Twig', sample: twig },
    { name : 'HTMLing', sample : htmling },
    { name : 'Svelte', sample : svelte },
    { name : 'Vue', sample : vue },
    { name : 'SLM', sample : slm },
    { name : 'BT', sample : bt },
    { name : 'BH', sample : bh },
    { name : 'Lodash', sample : lodash },
    { name : 'Plates', sample : plates },
    { name : 'BlueImp', sample : blueimp },
    { name : 'Xtpl', sample : xtpl },
    { name : 'fte', sample : fte }
];

var results_test = [];
var results_testUnescaped = [];
var results_total = [];

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				var tmp_test, tmp_testUnescaped, tmp_total;
				results_test.push([name, tmp_test = parseTime(result)]);
				results_testUnescaped.push([name, tmp_testUnescaped = parseTime(resultUnescaped)]);
				results_total.push([name, tmp_total = tmp_test + tmp_testUnescaped]);
				console.log(name);
				console.log('  Escaped    : ' + pad(10, tmp_test.toFixed(2)) + ' ms');
				console.log('  Unescaped  : ' + pad(10, tmp_testUnescaped.toFixed(2)) + ' ms');
				console.log('  Total      : ' + pad(10, tmp_total.toFixed(2)) + ' ms');
				console.log('');
				runTests();
			});
		});
	}
	else{

        console.log('Top Escaped');
        console.log('-----------------------------------');
        results_test.sort(compare).forEach(function(item){
            console.log('  ' + pad(item[0] + ': ', 25) + item[1].toFixed(2) + ' ms');
		});
        console.log('');

        console.log('Top Unescaped');
        console.log('-----------------------------------');
        results_testUnescaped.sort(compare).forEach(function(item){
            console.log('  ' + pad(item[0] + ': ', 25) + item[1].toFixed(2) + ' ms');
        });
        console.log('');

        console.log('Top Total');
        console.log('-----------------------------------');
        results_total.sort(compare).forEach(function(item){
            console.log('  ' + pad(item[0] + ': ', 25) + item[1].toFixed(2) + ' ms');
        });
        console.log('');
	}
};

function compare(a, b) {

    if (a[1] < b[1])
        return -1;
    if (a[1] > b[1])
        return 1;
    return 0;
}

function checkResult(result, rnd){

	return (result.indexOf('</title>') !== -1) &&
		   (result.indexOf(rnd) !== -1);
}

function parseTime(hrtime) {

	return hrtime[0] * 1000 + hrtime[1] / 1e6;
}

console.log('Rendering ' + count + ' templates:\n');
runTests();
