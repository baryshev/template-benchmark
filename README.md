# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.5.0 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- Node.JS version: v0.10.30

## Results

```sh
Rendering 100000 templates:

slm
  Escaped   : 1055ms
  Unescaped : 53ms
  Total     : 1108ms

ECT
  Escaped   : 1101ms
  Unescaped : 60ms
  Total     : 1161ms

Dust
  Escaped   : 1344ms
  Unescaped : 214ms
  Total     : 1558ms

Hogan.js
  Escaped   : 1405ms
  Unescaped : 316ms
  Total     : 1721ms

Gaikan
  Escaped   : 1508ms
  Unescaped : 41ms
  Total     : 1549ms

Fest
  Escaped   : 1446ms
  Unescaped : 141ms
  Total     : 1587ms

EJS without `with`
  Escaped   : 2729ms
  Unescaped : 174ms
  Total     : 2903ms

doT
  Escaped   : 2175ms
  Unescaped : 41ms
  Total     : 2216ms

Swig
  Escaped   : 3327ms
  Unescaped : 277ms
  Total     : 3604ms

Underscore
  Escaped   : 1937ms
  Unescaped : 1130ms
  Total     : 3067ms

EJS
  Escaped   : 4361ms
  Unescaped : 1277ms
  Total     : 5638ms

Eco
  Escaped   : 4756ms
  Unescaped : 406ms
  Total     : 5162ms

Handlebars.js
  Escaped   : 3427ms
  Unescaped : 1473ms
  Total     : 4900ms

Jade without `with`
  Escaped   : 2221ms
  Unescaped : 417ms
  Total     : 2638ms

CoffeeKup
  Escaped   : 2170ms
  Unescaped : 4253ms
  Total     : 6423ms

Jade
  Escaped   : 3995ms
  Unescaped : 1960ms
  Total     : 5955ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
