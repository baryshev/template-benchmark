# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))
- [Nunjucks](https://github.com/mozilla/nunjucks) v3.0.0 ([website](https://mozilla.github.io/nunjucks/))
- [Vash](https://github.com/kirbysayshi/vash) v0.12.2 ([website](https://github.com/kirbysayshi/vash/))
- [Mustache](https://github.com/janl/mustache.js) v2.3.0 ([website](https://github.com/janl/mustache.js/))
- [Pug](https://github.com/pugjs/pug) v2.0.0-beta6 ([website](https://pugjs.org/api/getting-started.html))

## Test environment

- CPU: Intel Core i5 4690 3.50Ghz
- OS: Windows 10
- Node.JS version: v6.5.0

## Performance Report
	Gaikan               ( 1370ms) - fastest
	Fest                 ( 1679ms) - 23% slower
	doT                  ( 2106ms) - 54% slower
	ECT                  ( 2864ms) - 109% slower
	Pug                  ( 3212ms) - 134% slower
	Vash                 ( 3311ms) - 142% slower
	Underscore           ( 3737ms) - 173% slower
	Dust                 ( 3777ms) - 176% slower
	Hogan.js             ( 3789ms) - 177% slower
	EJS without `with`   ( 4293ms) - 213% slower
	Handlebars.js        ( 4442ms) - 224% slower
	Swig                 ( 5755ms) - 320% slower
	Mustache             ( 5775ms) - 322% slower
	Nunjucks             ( 6329ms) - 362% slower
	Jade without `with`  ( 6988ms) - 410% slower
	Eco                  ( 7570ms) - 453% slower
	EJS                  ( 8180ms) - 497% slower
	CoffeeKup            ( 8514ms) - 521% slower
	Jade                 (18966ms) - 1284% slower

## Results
	Pug
	  Escaped   : 3095ms
	  Unescaped : 117ms
	  Total     : 3212ms

	Nunjucks
	  Escaped   : 3177ms
	  Unescaped : 3152ms
	  Total     : 6329ms

	Vash
	  Escaped   : 2463ms
	  Unescaped : 848ms
	  Total     : 3311ms

	Mustache
	  Escaped   : 3708ms
	  Unescaped : 2067ms
	  Total     : 5775ms

	ECT
	  Escaped   : 2775ms
	  Unescaped : 89ms
	  Total     : 2864ms

	Gaikan
	  Escaped   : 1318ms
	  Unescaped : 52ms
	  Total     : 1370ms

	Dust
	  Escaped   : 3462ms
	  Unescaped : 315ms
	  Total     : 3777ms

	Hogan.js
	  Escaped   : 3455ms
	  Unescaped : 334ms
	  Total     : 3789ms

	Fest
	  Escaped   : 1448ms
	  Unescaped : 231ms
	  Total     : 1679ms

	EJS without `with`
	  Escaped   : 3930ms
	  Unescaped : 363ms
	  Total     : 4293ms

	doT
	  Escaped   : 2038ms
	  Unescaped : 68ms
	  Total     : 2106ms

	Swig
	  Escaped   : 5488ms
	  Unescaped : 267ms
	  Total     : 5755ms

	Underscore
	  Escaped   : 2549ms
	  Unescaped : 1188ms
	  Total     : 3737ms

	Eco
	  Escaped   : 6942ms
	  Unescaped : 628ms
	  Total     : 7570ms

	EJS
	  Escaped   : 6118ms
	  Unescaped : 2062ms
	  Total     : 8180ms

	Handlebars.js
	  Escaped   : 3007ms
	  Unescaped : 1435ms
	  Total     : 4442ms

	Jade without `with`
	  Escaped   : 5482ms
	  Unescaped : 1506ms
	  Total     : 6988ms

	CoffeeKup
	  Escaped   : 2294ms
	  Unescaped : 6220ms
	  Total     : 8514ms

	Jade
	  Escaped   : 11757ms
	  Unescaped : 7209ms
	  Total     : 18966ms

## Usage

	git clone https://github.com/minicacristi/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
