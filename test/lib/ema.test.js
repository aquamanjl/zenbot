var EMA = require('../../lib/ema');
var talib = require('talib');
var math = require('mathjs');

describe('EMA (Exponential Moving Average)', function () {

  it('should calculate EMA with default period', function () {
    (EMA())(normalData, 'ema', 10, 'close')

    expect(math.round(normalData.period.ema, 2)).toEqual(22.24)
  })

})

var normalData = {
  lookback: [
    {close: 22.27},
    {close: 22.19},
    {close: 22.08},
    {close: 22.17},
    {close: 22.18},
    {close: 22.13},
    {close: 22.23},
    {close: 22.43},
    {close: 22.24},
    {close: 22.29, ema: 22.22},
    {close: 22.15, ema: 22.21}
  ].reverse(),
  period: {
    close: 22.39
  }
};
