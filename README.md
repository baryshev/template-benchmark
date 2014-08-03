# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v1.0.0
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
  Escaped   : 1104ms
  Unescaped : 55ms
  Total     : 1159ms

ECT
  Escaped   : 1124ms
  Unescaped : 79ms
  Total     : 1203ms

Dust
  Escaped   : 1341ms
  Unescaped : 230ms
  Total     : 1571ms

Hogan.js
  Escaped   : 1562ms
  Unescaped : 320ms
  Total     : 1882ms

Gaikan
  Escaped   : 1374ms
  Unescaped : 52ms
  Total     : 1426ms

Fest
  Escaped   : 1630ms
  Unescaped : 146ms
  Total     : 1776ms

EJS without `with`
  Escaped   : 2324ms
  Unescaped : 197ms
  Total     : 2521ms

doT
  Escaped   : 2171ms
  Unescaped : 60ms
  Total     : 2231ms

Swig
  Escaped   : 3215ms
  Unescaped : 246ms
  Total     : 3461ms

Underscore
  Escaped   : 2151ms
  Unescaped : 1391ms
  Total     : 3542ms

EJS
  Escaped   : 3689ms
  Unescaped : 1085ms
  Total     : 4774ms

Eco
  Escaped   : 4257ms
  Unescaped : 452ms
  Total     : 4709ms

Handlebars.js
  Escaped   : 1921ms
  Unescaped : 273ms
  Total     : 2194ms

Jade without `with`
  Escaped   : 2160ms
  Unescaped : 431ms
  Total     : 2591ms

CoffeeKup
  Escaped   : 2141ms
  Unescaped : 4234ms
  Total     : 6375ms

Jade
  Escaped   : 3935ms
  Unescaped : 1829ms
  Total     : 5764ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
