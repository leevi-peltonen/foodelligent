const MULTIPLIERS = {
  exponent: 2,
  timescalar: 1,
  ratescalar: 1,
};

const timeRateIndexCalculator = (time, rate) =>
  (MULTIPLIERS.ratescalar * rate ** MULTIPLIERS.exponent) /
  (MULTIPLIERS.timescalar * time);

  module.exports = {
    timeRateIndexCalculator
  }