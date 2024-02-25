var commonform = require('vesting-commonform')
var parse = require('./')
var vesting = require('vesting')

require('tape')('Round Trips', function(test) {

  test.test('Vesting with Cliff', function(test) {
    var args = [48, 4, 1]
    var legal = commonform.apply(null, args)
    var direct = vesting.apply(null, args)
    var parsed = parse(legal.form, legal.blanks)
    ; [ [ 1000000,
          new Date(2015, 0, 1),
          new Date(2015, 0, 2) ],
        [ 1000000,
          new Date(2015, 0, 1),
          new Date(2016, 0, 1) ],
        [ 1000000,
          new Date(2015, 0, 1),
          new Date(2016, 1, 1) ],
        [ 1000000,
          new Date(2015, 0, 1),
          new Date(2020, 0, 1) ] ]
      .forEach(function(example) {
        test.deepEqual(
          direct.apply(null, example),
          parsed.apply(null, example),
          'return the same results') })
    test.equal(
      direct.toString(),
      parsed.toString(),
      'stringified functions equal')
    test.end() })

  test.test('Straight Vesting', function(test) {
    var args = [48]
    var legal = commonform.apply(null, args)
    var direct = vesting.apply(null, args)
    var parsed = parse(legal.form, legal.blanks)
    ; [ [ 4800000,
          new Date(2015, 0, 1),
          new Date(2015, 1, 1) ] ]
      .forEach(function(example) {
        test.deepEqual(
          direct.apply(null, example),
          parsed.apply(null, example),
          'return the same results') })
    test.equal(
      direct.toString(),
      parsed.toString(),
      'stringified functions equal')
    test.end() }) })