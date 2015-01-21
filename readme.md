## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Filter the list of all available (possible) 178+ css2/3 properties with glob patterns

## Install
```bash
npm install filter-css-properties
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var filterCssProperties = require('filter-css-properties');

filterCssProperties('*color*')
//=> [ 'background-color',
//  'border-bottom-color',
//  'border-color',
//  'border-left-color',
//  'border-right-color',
//  'border-top-color',
//  'color',
//  'column-rule-color',
//  'outline-color',
//  'text-decoration-color' ]

filterCssProperties(['*color*', '!border*'])
//=> [ 'background-color',
//  'color',
//  'column-rule-color',
//  'outline-color',
//  'text-decoration-color' ]
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/filter-css-properties
[npmjs-img]: https://img.shields.io/npm/v/filter-css-properties.svg?style=flat&label=filter-css-properties

[coveralls-url]: https://coveralls.io/r/tunnckoCore/filter-css-properties?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/filter-css-properties.svg?style=flat

[license-url]: https://github.com/tunnckoCore/filter-css-properties/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/filter-css-properties
[travis-img]: https://img.shields.io/travis/tunnckoCore/filter-css-properties.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/filter-css-properties
[daviddm-img]: https://img.shields.io/david/tunnckoCore/filter-css-properties.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/filter-css-properties/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 21, 2015_