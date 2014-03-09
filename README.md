# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.7 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))
- [Gaikan](https://github.com/Deathspike/gaikan) v2.0.0

## Results

### Linux Ubuntu 12.04, NodeJS 0.10.26 (100.000x)

	Gaikan               ( 2090ms) - fastest
	ECT                  ( 2334ms) - 12% slower
	Fest                 ( 2791ms) - 34% slower
	Dust                 ( 3030ms) - 45% slower
	doT                  ( 3940ms) - 89% slower
	Hogan.js             ( 3977ms) - 90% slower
	EJS without `with`   ( 5190ms) - 148% slower
	Swig                 ( 5258ms) - 152% slower
	Underscore           ( 6154ms) - 194% slower
	Handlebars.js        ( 7255ms) - 247% slower
	Eco                  ( 8315ms) - 298% slower
	EJS                  ( 9059ms) - 333% slower
	Jade without `with`  (10973ms) - 425% slower
	CoffeeKup            (11062ms) - 429% slower
	Jade                 (27295ms) - 1206% slower

### Windows 7 x64 SP1, NodeJS 0.10.26 (100.000x)

	Gaikan               ( 2147ms) - fastest
	Fest                 ( 2535ms) - 18% slower
	doT                  ( 3524ms) - 64% slower
	Underscore           ( 5108ms) - 138% slower
	Handlebars.js        ( 5734ms) - 167% slower
	ECT                  ( 7223ms) - 236% slower
	EJS without `with`   ( 8732ms) - 307% slower
	Dust                 ( 9136ms) - 326% slower
	Hogan.js             ( 9960ms) - 364% slower
	Swig                 (10240ms) - 377% slower
	Eco                  (12292ms) - 473% slower
	Jade without `with`  (13510ms) - 529% slower
	EJS                  (14917ms) - 595% slower
	CoffeeKup            (15319ms) - 614% slower
	Jade                 (34000ms) - 1484% slower
	
## Usage

	git clone git://github.com/baryshev/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
