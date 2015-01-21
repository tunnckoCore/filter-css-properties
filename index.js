/**
 * filter-css-properties <https://github.com/tunnckoCore/filter-css-properties>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var micromatch = require('micromatch');

/**
 * Filter given css properties or all possible
 * against glob patterns
 *
 * @param  {Array} `cssProperties`
 * @param  {Array|String} `patterns`
 * @return {Array}
 * @api public
 */
module.exports = function filterCssProperties(cssProperties, patterns) {
  if (!cssProperties && !patterns) {
    throw new Error('filter-css-properties: should have at least one argument');
  }
  if (!patterns) {
    patterns = cssProperties;
    cssProperties = require('css-properties')();
  }

  if (!Array.isArray(cssProperties)) {
    throw new TypeError('filter-css-properties: expect `cssProperties` be array')
  }

  if (typeof patterns === 'string') {
    return micromatch.match(cssProperties, patterns);
  }

  return micromatch(cssProperties, patterns);
};
