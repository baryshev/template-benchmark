# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.2 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v1.0.0
- [Fest](https://github.com/mailru/fest) v0.8.2
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v2.0.0-alpha.4 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v1.5.0 ([website](http://jade-lang.com/))
- [Slm](https://github.com/slm-lang/slm) v0.1.1
- [Swig](https://github.com/paularmstrong/swig) v1.4.1
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- Node.JS version: v0.10.30

## Results

```sh
Rendering 100000 templates:

Slm
  Escaped   : 1062ms
  Unescaped : 55ms
  Total     : 1117ms

ECT
  Escaped   : 1155ms
  Unescaped : 62ms
  Total     : 1217ms

Dust
  Escaped   : 1316ms
  Unescaped : 218ms
  Total     : 1534ms

Hogan.js
  Escaped   : 1448ms
  Unescaped : 328ms
  Total     : 1776ms

Gaikan
  Escaped   : 1218ms
  Unescaped : 42ms
  Total     : 1260ms

Fest
  Escaped   : 1432ms
  Unescaped : 150ms
  Total     : 1582ms

EJS without `with`
  Escaped   : 2087ms
  Unescaped : 183ms
  Total     : 2270ms

doT
  Escaped   : 1924ms
  Unescaped : 40ms
  Total     : 1964ms

Swig
  Escaped   : 3225ms
  Unescaped : 237ms
  Total     : 3462ms

Underscore
  Escaped   : 2039ms
  Unescaped : 1443ms
  Total     : 3482ms

EJS
  Escaped   : 3471ms
  Unescaped : 1100ms
  Total     : 4571ms

Eco
  Escaped   : 3970ms
  Unescaped : 441ms
  Total     : 4411ms

Handlebars.js
  Escaped   : 1844ms
  Unescaped : 285ms
  Total     : 2129ms

Jade without `with`
  Escaped   : 2291ms
  Unescaped : 598ms
  Total     : 2889ms

CoffeeKup
  Escaped   : 2241ms
  Unescaped : 4312ms
  Total     : 6553ms

Jade
  Escaped   : 4006ms
  Unescaped : 1992ms
  Total     : 5998ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
