/**
 * filter-css-properties <https://github.com/tunnckoCore/filter-css-properties>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var filterCssProperties = require('./index');

describe('filter-css-properties:', function() {
  it('should throw Error if no arguments', function(done) {
    assert.throws(filterCssProperties, Error);
    done();
  });

  it('should throw if both arguments given and first not array', function(done) {
    function fake() {
      var s = filterCssProperties('', '*color*');
    }
    assert.throws(fake, TypeError);
    done();
  });

  it('should work when glob pattern given as string', function(done) {
    var actual = filterCssProperties('*color*');
    var expected = [
      'background-color',
      'border-bottom-color',
      'border-color',
      'border-left-color',
      'border-right-color',
      'border-top-color',
      'color',
      'column-rule-color',
      'outline-color',
      'text-decoration-color'
    ];
    assert.deepEqual(actual, expected);
    done();
  });

  it('should work when not glob string given', function(done) {
    var actual = filterCssProperties('color');
    var expected = ['color'];
    assert.deepEqual(actual, expected);
    done();
  });

  it('should work when array of strings given', function(done) {
    var actual = filterCssProperties(['color', 'border-top-color']);
    var expected = ['color', 'border-top-color'];
    assert.deepEqual(actual, expected);
    done();
  });

  it('should work when array of glob pattern strings given', function(done) {
    var actual = filterCssProperties(['*color*', '!border*']);
    var expected = [
      'background-color',
      'color',
      'column-rule-color',
      'outline-color',
      'text-decoration-color'
    ];
    assert.deepEqual(actual, expected);
    done();
  });

  it('should work with custom (fake) css properties array', function(done) {
    var actual = filterCssProperties([
      'background-color',
      'border-bottom-color',
      'border-color',
      'border-left-color',
      'border-right-color',
      'border-top-color',
      'color',
      'column-rule-color',
      'outline-color',
      'text-decoration-color'
    ], ['*color*', '!border*']);
    var expected = [
      'background-color',
      'color',
      'column-rule-color',
      'outline-color',
      'text-decoration-color'
    ];
    assert.deepEqual(actual, expected);
    done();
  });
});
