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

## Test environment

- CPU: Intel Core i5 4690 3.50Ghz
- OS: Windows 10
- Node.JS version: v6.5.0

## Results

Nunjucks
  Escaped   : 2832ms
  Unescaped : 2821ms
  Total     : 5653ms

Vash
  Escaped   : 2147ms
  Unescaped : 739ms
  Total     : 2886ms

Mustache
  Escaped   : 3400ms
  Unescaped : 1975ms
  Total     : 5375ms

ECT
  Escaped   : 2541ms
  Unescaped : 78ms
  Total     : 2619ms

Gaikan
  Escaped   : 1157ms
  Unescaped : 45ms
  Total     : 1202ms

Dust
  Escaped   : 3124ms
  Unescaped : 286ms
  Total     : 3410ms

Hogan.js
  Escaped   : 3248ms
  Unescaped : 305ms
  Total     : 3553ms

Fest
  Escaped   : 1318ms
  Unescaped : 204ms
  Total     : 1522ms

EJS without `with`
  Escaped   : 3619ms
  Unescaped : 308ms
  Total     : 3927ms

doT
  Escaped   : 1735ms
  Unescaped : 45ms
  Total     : 1780ms

Swig
  Escaped   : 4158ms
  Unescaped : 212ms
  Total     : 4370ms

Underscore
  Escaped   : 1592ms
  Unescaped : 977ms
  Total     : 2569ms

Eco
  Escaped   : 4750ms
  Unescaped : 503ms
  Total     : 5253ms

EJS
  Escaped   : 5223ms
  Unescaped : 1822ms
  Total     : 7045ms

Handlebars.js
  Escaped   : 2606ms
  Unescaped : 1286ms
  Total     : 3892ms

Jade without `with`
  Escaped   : 4757ms
  Unescaped : 1239ms
  Total     : 5996ms

CoffeeKup
  Escaped   : 1880ms
  Unescaped : 5219ms
  Total     : 7099ms

Jade
  Escaped   : 10023ms
  Unescaped : 6172ms
  Total     : 16195ms

## Performance Report
Gaikan               ( 1202ms) - fastest
Fest                 ( 1522ms) - 27% slower
doT                  ( 1780ms) - 48% slower
Underscore           ( 2569ms) - 114% slower
ECT                  ( 2619ms) - 118% slower
Vash                 ( 2886ms) - 140% slower
Dust                 ( 3410ms) - 184% slower
Hogan.js             ( 3553ms) - 196% slower
Handlebars.js        ( 3892ms) - 224% slower
EJS without `with`   ( 3927ms) - 227% slower
Swig                 ( 4370ms) - 264% slower
Eco                  ( 5253ms) - 337% slower
Mustache             ( 5375ms) - 347% slower
Nunjucks             ( 5653ms) - 370% slower
Jade without `with`  ( 5996ms) - 399% slower
EJS                  ( 7045ms) - 486% slower
CoffeeKup            ( 7099ms) - 491% slower
Jade                 (16195ms) - 1247% slower

## Usage

	git clone https://github.com/minicacristi/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
