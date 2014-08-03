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
  Escaped   : 1032ms
  Unescaped : 52ms
  Total     : 1084ms

ECT
  Escaped   : 1078ms
  Unescaped : 60ms
  Total     : 1138ms

Dust
  Escaped   : 1297ms
  Unescaped : 222ms
  Total     : 1519ms

Hogan.js
  Escaped   : 1466ms
  Unescaped : 307ms
  Total     : 1773ms

Gaikan
  Escaped   : 1257ms
  Unescaped : 41ms
  Total     : 1298ms

Fest
  Escaped   : 1425ms
  Unescaped : 141ms
  Total     : 1566ms

EJS without `with`
  Escaped   : 2746ms
  Unescaped : 181ms
  Total     : 2927ms

doT
  Escaped   : 2006ms
  Unescaped : 38ms
  Total     : 2044ms

Swig
  Escaped   : 3187ms
  Unescaped : 243ms
  Total     : 3430ms

Underscore
  Escaped   : 1822ms
  Unescaped : 1134ms
  Total     : 2956ms

EJS
  Escaped   : 4534ms
  Unescaped : 1243ms
  Total     : 5777ms

Eco
  Escaped   : 4089ms
  Unescaped : 407ms
  Total     : 4496ms

Handlebars.js
  Escaped   : 1979ms
  Unescaped : 272ms
  Total     : 2251ms

Jade without `with`
  Escaped   : 2077ms
  Unescaped : 504ms
  Total     : 2581ms

CoffeeKup
  Escaped   : 2180ms
  Unescaped : 4410ms
  Total     : 6590ms

Jade
  Escaped   : 4045ms
  Unescaped : 1881ms
  Total     : 5926ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
