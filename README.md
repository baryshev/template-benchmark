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
- [Jade](https://github.com/visionmedia/jade) v1.9.2 ([website](http://jade-lang.com/))
- [Slm](https://github.com/slm-lang/slm) v0.4.1
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.8.3 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- io.js version: v2.0.0

## Results

```sh

Rendering 100000 templates:

Slm
  Escaped   : 1169ms
  Unescaped : 46ms
  Total     : 1215ms

ECT
  Escaped   : 1202ms
  Unescaped : 71ms
  Total     : 1273ms

Dust
  Escaped   : 1586ms
  Unescaped : 293ms
  Total     : 1879ms

Hogan.js
  Escaped   : 1513ms
  Unescaped : 205ms
  Total     : 1718ms

Gaikan
  Escaped   : 1419ms
  Unescaped : 46ms
  Total     : 1465ms

Fest
  Escaped   : 1884ms
  Unescaped : 199ms
  Total     : 2083ms

EJS without `with`
  Escaped   : 2567ms
  Unescaped : 653ms
  Total     : 3220ms

doT
  Escaped   : 2267ms
  Unescaped : 40ms
  Total     : 2307ms

Swig
  Escaped   : 3682ms
  Unescaped : 689ms
  Total     : 4371ms

Underscore
  Escaped   : 2275ms
  Unescaped : 1541ms
  Total     : 3816ms

EJS
  Escaped   : 5419ms
  Unescaped : 2795ms
  Total     : 8214ms

Eco
  Escaped   : 3879ms
  Unescaped : 793ms
  Total     : 4672ms

Handlebars.js
  Escaped   : 2227ms
  Unescaped : 300ms
  Total     : 2527ms

Jade without `with`
  Escaped   : 2434ms
  Unescaped : 679ms
  Total     : 3113ms

CoffeeKup
  Escaped   : 3960ms
  Unescaped : 6202ms
  Total     : 10162ms

Jade
  Escaped   : 8085ms
  Unescaped : 5389ms
  Total     : 13474ms

```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
