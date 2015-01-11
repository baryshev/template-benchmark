# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.3 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v1.0.0
- [Fest](https://github.com/mailru/fest) v0.8.2
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v2.0.0 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.8.2 ([website](http://jade-lang.com/))
- [Slm](https://github.com/slm-lang/slm) v0.3.4
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.7.0 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- Node.JS version: v0.10.35

## Results

```sh
Rendering 100000 templates:

Slm
  Escaped   : 1028ms
  Unescaped : 48ms
  Total     : 1076ms

ECT
  Escaped   : 1071ms
  Unescaped : 59ms
  Total     : 1130ms

Dust
  Escaped   : 1331ms
  Unescaped : 214ms
  Total     : 1545ms

Hogan.js
  Escaped   : 1395ms
  Unescaped : 315ms
  Total     : 1710ms

Gaikan
  Escaped   : 1307ms
  Unescaped : 40ms
  Total     : 1347ms

Fest
  Escaped   : 1492ms
  Unescaped : 148ms
  Total     : 1640ms

EJS without `with`
  Escaped   : 2063ms
  Unescaped : 175ms
  Total     : 2238ms

doT
  Escaped   : 1938ms
  Unescaped : 39ms
  Total     : 1977ms

Swig
  Escaped   : 3159ms
  Unescaped : 232ms
  Total     : 3391ms

Underscore
  Escaped   : 1988ms
  Unescaped : 1363ms
  Total     : 3351ms

EJS
  Escaped   : 3497ms
  Unescaped : 1089ms
  Total     : 4586ms

Eco
  Escaped   : 3829ms
  Unescaped : 414ms
  Total     : 4243ms

Handlebars.js
  Escaped   : 1758ms
  Unescaped : 290ms
  Total     : 2048ms

Jade without `with`
  Escaped   : 2235ms
  Unescaped : 542ms
  Total     : 2777ms

CoffeeKup
  Escaped   : 2142ms
  Unescaped : 4156ms
  Total     : 6298ms

Jade
  Escaped   : 3990ms
  Unescaped : 1923ms
  Total     : 5913ms

```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
