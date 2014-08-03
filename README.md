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
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
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
  Escaped   : 1051ms
  Unescaped : 48ms
  Total     : 1099ms

ECT
  Escaped   : 1080ms
  Unescaped : 60ms
  Total     : 1140ms

Dust
  Escaped   : 1444ms
  Unescaped : 210ms
  Total     : 1654ms

Hogan.js
  Escaped   : 1609ms
  Unescaped : 441ms
  Total     : 2050ms

Gaikan
  Escaped   : 1415ms
  Unescaped : 38ms
  Total     : 1453ms

Fest
  Escaped   : 1492ms
  Unescaped : 149ms
  Total     : 1641ms

EJS without `with`
  Escaped   : 2809ms
  Unescaped : 180ms
  Total     : 2989ms

doT
  Escaped   : 2193ms
  Unescaped : 43ms
  Total     : 2236ms

Swig
  Escaped   : 3309ms
  Unescaped : 278ms
  Total     : 3587ms

Underscore
  Escaped   : 1952ms
  Unescaped : 1143ms
  Total     : 3095ms

EJS
  Escaped   : 4649ms
  Unescaped : 1262ms
  Total     : 5911ms

Eco
  Escaped   : 4310ms
  Unescaped : 441ms
  Total     : 4751ms

Handlebars.js
  Escaped   : 3594ms
  Unescaped : 1461ms
  Total     : 5055ms

Jade without `with`
  Escaped   : 5645ms
  Unescaped : 2097ms
  Total     : 7742ms

CoffeeKup
  Escaped   : 2115ms
  Unescaped : 4164ms
  Total     : 6279ms

Jade
  Escaped   : 9337ms
  Unescaped : 6236ms
  Total     : 15573ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
