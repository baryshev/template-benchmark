# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.8.2
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.2
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v2.0.0-alpha.4 ([website](http://handlebarsjs.com/))
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
  Escaped   : 1065ms
  Unescaped : 49ms
  Total     : 1114ms

ECT
  Escaped   : 1076ms
  Unescaped : 68ms
  Total     : 1144ms

Dust
  Escaped   : 1310ms
  Unescaped : 211ms
  Total     : 1521ms

Hogan.js
  Escaped   : 1394ms
  Unescaped : 312ms
  Total     : 1706ms

Gaikan
  Escaped   : 1322ms
  Unescaped : 43ms
  Total     : 1365ms

Fest
  Escaped   : 1602ms
  Unescaped : 143ms
  Total     : 1745ms

EJS without `with`
  Escaped   : 2746ms
  Unescaped : 173ms
  Total     : 2919ms

doT
  Escaped   : 2049ms
  Unescaped : 37ms
  Total     : 2086ms

Swig
  Escaped   : 3161ms
  Unescaped : 250ms
  Total     : 3411ms

Underscore
  Escaped   : 2326ms
  Unescaped : 1409ms
  Total     : 3735ms

EJS
  Escaped   : 4349ms
  Unescaped : 1260ms
  Total     : 5609ms

Eco
  Escaped   : 4845ms
  Unescaped : 550ms
  Total     : 5395ms

Handlebars.js
  Escaped   : 2151ms
  Unescaped : 314ms
  Total     : 2465ms

Jade without `with`
  Escaped   : 2091ms
  Unescaped : 426ms
  Total     : 2517ms

CoffeeKup
  Escaped   : 2322ms
  Unescaped : 4260ms
  Total     : 6582ms

Jade
  Escaped   : 3940ms
  Unescaped : 1978ms
  Total     : 5918ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
