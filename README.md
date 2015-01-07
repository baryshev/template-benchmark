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
- [Slm](https://github.com/slm-lang/slm) v0.3.0
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.7.0 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- Node.JS version: v0.10.30

## Results

```sh
Rendering 100000 templates:

Slm
  Escaped   : 1051ms
  Unescaped : 49ms
  Total     : 1100ms

ECT
  Escaped   : 1075ms
  Unescaped : 62ms
  Total     : 1137ms

Dust
  Escaped   : 1342ms
  Unescaped : 223ms
  Total     : 1565ms

Hogan.js
  Escaped   : 1444ms
  Unescaped : 329ms
  Total     : 1773ms

Gaikan
  Escaped   : 1417ms
  Unescaped : 42ms
  Total     : 1459ms

Fest
  Escaped   : 1546ms
  Unescaped : 153ms
  Total     : 1699ms

EJS without `with`
  Escaped   : 2138ms
  Unescaped : 192ms
  Total     : 2330ms

doT
  Escaped   : 2058ms
  Unescaped : 38ms
  Total     : 2096ms

Swig
  Escaped   : 3274ms
  Unescaped : 242ms
  Total     : 3516ms

Underscore
  Escaped   : 2105ms
  Unescaped : 1409ms
  Total     : 3514ms

EJS
  Escaped   : 3624ms
  Unescaped : 1083ms
  Total     : 4707ms

Eco
  Escaped   : 3956ms
  Unescaped : 425ms
  Total     : 4381ms

Handlebars.js
  Escaped   : 1979ms
  Unescaped : 307ms
  Total     : 2286ms

Jade without `with`
  Escaped   : 2376ms
  Unescaped : 645ms
  Total     : 3021ms

CoffeeKup
  Escaped   : 2353ms
  Unescaped : 4649ms
  Total     : 7002ms

Jade
  Escaped   : 4012ms
  Unescaped : 1980ms
  Total     : 5992ms

```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
