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
- [Jade](https://github.com/visionmedia/jade) v1.9.2 ([website](http://jade-lang.com/))
- [Slm](https://github.com/slm-lang/slm) v0.4.1
- [Swig](https://github.com/paularmstrong/swig) v1.4.2
- [Underscore](https://github.com/documentcloud/underscore) v1.8.3 ([website](http://underscorejs.org/))

## Test environment

- CPU: 2,7 GHz Intel Core i7
- OS: OS X 10.10
- io.js version: v2.0.0

## Results

```sh
Rendering 100000 templates:

Slm
  Escaped   : 1260ms
  Unescaped : 50ms
  Total     : 1310ms

ECT
  Escaped   : 1293ms
  Unescaped : 76ms
  Total     : 1369ms

Dust
  Escaped   : 1745ms
  Unescaped : 347ms
  Total     : 2092ms

Hogan.js
  Escaped   : 1542ms
  Unescaped : 228ms
  Total     : 1770ms

Gaikan
  Escaped   : 1484ms
  Unescaped : 42ms
  Total     : 1526ms

Fest
  Escaped   : 2065ms
  Unescaped : 207ms
  Total     : 2272ms

EJS without `with`
  Escaped   : 2193ms
  Unescaped : 313ms
  Total     : 2506ms

doT
  Escaped   : 2384ms
  Unescaped : 44ms
  Total     : 2428ms

Swig
  Escaped   : 3806ms
  Unescaped : 711ms
  Total     : 4517ms

Underscore
  Escaped   : 2815ms
  Unescaped : 1987ms
  Total     : 4802ms

EJS
  Escaped   : 4158ms
  Unescaped : 1735ms
  Total     : 5893ms

Eco
  Escaped   : 3828ms
  Unescaped : 782ms
  Total     : 4610ms

Handlebars.js
  Escaped   : 2217ms
  Unescaped : 202ms
  Total     : 2419ms

Jade without `with`
  Escaped   : 2447ms
  Unescaped : 669ms
  Total     : 3116ms

CoffeeKup
  Escaped   : 3868ms
  Unescaped : 6563ms
  Total     : 10431ms

Jade
  Escaped   : 8207ms
  Unescaped : 5561ms
  Total     : 13768ms

```

## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
