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
  Escaped   : 1059ms
  Unescaped : 49ms
  Total     : 1108ms

ECT
  Escaped   : 1070ms
  Unescaped : 60ms
  Total     : 1130ms

Dust
  Escaped   : 1306ms
  Unescaped : 229ms
  Total     : 1535ms

Hogan.js
  Escaped   : 1529ms
  Unescaped : 327ms
  Total     : 1856ms

Gaikan
  Escaped   : 1291ms
  Unescaped : 40ms
  Total     : 1331ms

Fest
  Escaped   : 1474ms
  Unescaped : 137ms
  Total     : 1611ms

EJS without `with`
  Escaped   : 2044ms
  Unescaped : 184ms
  Total     : 2228ms

doT
  Escaped   : 2069ms
  Unescaped : 37ms
  Total     : 2106ms

Swig
  Escaped   : 3233ms
  Unescaped : 240ms
  Total     : 3473ms

Underscore
  Escaped   : 2053ms
  Unescaped : 1295ms
  Total     : 3348ms

EJS
  Escaped   : 3230ms
  Unescaped : 877ms
  Total     : 4107ms

Eco
  Escaped   : 4436ms
  Unescaped : 414ms
  Total     : 4850ms

Handlebars.js
  Escaped   : 1927ms
  Unescaped : 273ms
  Total     : 2200ms

Jade without `with`
  Escaped   : 2070ms
  Unescaped : 438ms
  Total     : 2508ms

CoffeeKup
  Escaped   : 2183ms
  Unescaped : 4172ms
  Total     : 6355ms

Jade
  Escaped   : 4190ms
  Unescaped : 2054ms
  Total     : 6244ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
