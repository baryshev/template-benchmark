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
- [Swig](https://github.com/paularmstrong/swig) v1.4.1
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- Node.JS version: v0.10.30

## Results

```sh
Rendering 100000 templates:

slm
  Escaped   : 1039ms
  Unescaped : 50ms
  Total     : 1089ms

ECT
  Escaped   : 1066ms
  Unescaped : 59ms
  Total     : 1125ms

Dust
  Escaped   : 1435ms
  Unescaped : 219ms
  Total     : 1654ms

Hogan.js
  Escaped   : 1445ms
  Unescaped : 324ms
  Total     : 1769ms

Gaikan
  Escaped   : 1368ms
  Unescaped : 41ms
  Total     : 1409ms

Fest
  Escaped   : 1557ms
  Unescaped : 148ms
  Total     : 1705ms

EJS without `with`
  Escaped   : 2157ms
  Unescaped : 189ms
  Total     : 2346ms

doT
  Escaped   : 2198ms
  Unescaped : 41ms
  Total     : 2239ms

Swig
  Escaped   : 3325ms
  Unescaped : 255ms
  Total     : 3580ms

Underscore
  Escaped   : 2129ms
  Unescaped : 1339ms
  Total     : 3468ms

EJS
  Escaped   : 3580ms
  Unescaped : 909ms
  Total     : 4489ms

Eco
  Escaped   : 4455ms
  Unescaped : 420ms
  Total     : 4875ms

Handlebars.js
  Escaped   : 1966ms
  Unescaped : 270ms
  Total     : 2236ms

Jade without `with`
  Escaped   : 2162ms
  Unescaped : 445ms
  Total     : 2607ms

CoffeeKup
  Escaped   : 2167ms
  Unescaped : 4240ms
  Total     : 6407ms

Jade
  Escaped   : 4123ms
  Unescaped : 1983ms
  Total     : 6106ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
