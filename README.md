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
  Escaped   : 1049ms
  Unescaped : 48ms
  Total     : 1097ms

ECT
  Escaped   : 1085ms
  Unescaped : 68ms
  Total     : 1153ms

Dust
  Escaped   : 1383ms
  Unescaped : 222ms
  Total     : 1605ms

Hogan.js
  Escaped   : 1426ms
  Unescaped : 306ms
  Total     : 1732ms

Gaikan
  Escaped   : 1339ms
  Unescaped : 43ms
  Total     : 1382ms

Fest
  Escaped   : 1540ms
  Unescaped : 138ms
  Total     : 1678ms

EJS without `with`
  Escaped   : 2047ms
  Unescaped : 181ms
  Total     : 2228ms

doT
  Escaped   : 2057ms
  Unescaped : 37ms
  Total     : 2094ms

Swig
  Escaped   : 3204ms
  Unescaped : 234ms
  Total     : 3438ms

Underscore
  Escaped   : 2166ms
  Unescaped : 1376ms
  Total     : 3542ms

EJS
  Escaped   : 3699ms
  Unescaped : 1106ms
  Total     : 4805ms

Eco
  Escaped   : 4064ms
  Unescaped : 417ms
  Total     : 4481ms

Handlebars.js
  Escaped   : 1938ms
  Unescaped : 271ms
  Total     : 2209ms

Jade without `with`
  Escaped   : 2143ms
  Unescaped : 453ms
  Total     : 2596ms

CoffeeKup
  Escaped   : 2141ms
  Unescaped : 4308ms
  Total     : 6449ms

Jade
  Escaped   : 4030ms
  Unescaped : 1852ms
  Total     : 5882ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
