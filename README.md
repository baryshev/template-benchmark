# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
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
  Escaped   : 1097ms
  Unescaped : 50ms
  Total     : 1147ms

ECT
  Escaped   : 1114ms
  Unescaped : 69ms
  Total     : 1183ms

Dust
  Escaped   : 1480ms
  Unescaped : 214ms
  Total     : 1694ms

Hogan.js
  Escaped   : 1656ms
  Unescaped : 446ms
  Total     : 2102ms

Gaikan
  Escaped   : 1429ms
  Unescaped : 39ms
  Total     : 1468ms

Fest
  Escaped   : 1443ms
  Unescaped : 142ms
  Total     : 1585ms

EJS without `with`
  Escaped   : 2717ms
  Unescaped : 183ms
  Total     : 2900ms

doT
  Escaped   : 2024ms
  Unescaped : 38ms
  Total     : 2062ms

Swig
  Escaped   : 3100ms
  Unescaped : 260ms
  Total     : 3360ms

Underscore
  Escaped   : 2075ms
  Unescaped : 1315ms
  Total     : 3390ms

EJS
  Escaped   : 4286ms
  Unescaped : 1216ms
  Total     : 5502ms

Eco
  Escaped   : 4188ms
  Unescaped : 409ms
  Total     : 4597ms

Handlebars.js
  Escaped   : 3558ms
  Unescaped : 1455ms
  Total     : 5013ms

Jade without `with`
  Escaped   : 2081ms
  Unescaped : 413ms
  Total     : 2494ms

CoffeeKup
  Escaped   : 2242ms
  Unescaped : 4381ms
  Total     : 6623ms

Jade
  Escaped   : 3901ms
  Unescaped : 1959ms
  Total     : 5860ms
```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
