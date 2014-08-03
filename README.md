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
  Escaped   : 1101ms
  Unescaped : 53ms
  Total     : 1154ms

ECT
  Escaped   : 1159ms
  Unescaped : 60ms
  Total     : 1219ms

Dust
  Escaped   : 1329ms
  Unescaped : 214ms
  Total     : 1543ms

Hogan.js
  Escaped   : 1593ms
  Unescaped : 449ms
  Total     : 2042ms

Gaikan
  Escaped   : 1549ms
  Unescaped : 39ms
  Total     : 1588ms

Fest
  Escaped   : 1511ms
  Unescaped : 166ms
  Total     : 1677ms

EJS without `with`
  Escaped   : 2781ms
  Unescaped : 182ms
  Total     : 2963ms

doT
  Escaped   : 1992ms
  Unescaped : 37ms
  Total     : 2029ms

Swig
  Escaped   : 3369ms
  Unescaped : 256ms
  Total     : 3625ms

Underscore
  Escaped   : 2157ms
  Unescaped : 1361ms
  Total     : 3518ms

EJS
  Escaped   : 5046ms
  Unescaped : 1691ms
  Total     : 6737ms

Eco
  Escaped   : 4189ms
  Unescaped : 419ms
  Total     : 4608ms

Handlebars.js
  Escaped   : 3393ms
  Unescaped : 1438ms
  Total     : 4831ms

Jade without `with`
  Escaped   : 2248ms
  Unescaped : 409ms
  Total     : 2657ms

CoffeeKup
  Escaped   : 2153ms
  Unescaped : 4188ms
  Total     : 6341ms

Jade
  Escaped   : 4122ms
  Unescaped : 1908ms
  Total     : 6030ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
