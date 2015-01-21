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
 * @param  {Array} `props`
 * @param  {Array|String} `patterns`
 * @return {Array}
 * @api public
 */
module.exports = function filterCdssProperties(props, patterns) {
  if (!props && !patterns) {
    throw new Error('filter-css-properties: should have at least one argument');
  }

  if (!patterns) {
    patterns = props;
    props = require('css-properties')();
  }

  if (!Array.isArray(props)) {
    throw new TypeError('filter-css-properties: expect `props` be array');
  }

  if (typeof patterns === 'string') {
    return micromatch.match(props, patterns);
  }

  return micromatch(props, patterns);
};
