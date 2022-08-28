const MULTIPLIERS = {
  exponent: 2,
  timescalar: 1,
  ratescalar: 1,
};

const timeRateIndex = (time, rate) =>
  (MULTIPLIERS.ratescalar * rate ** MULTIPLIERS.exponent) /
  (MULTIPLIERS.timescalar * time);


export default timeRateIndex