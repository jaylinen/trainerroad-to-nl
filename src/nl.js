const getTime = (start, end) => {
  const time = end - start;

  return `${time}s`;
};

const getPower = (power) => `${power}%`;

const parse = ({
  Start,
  End,
  StartTargetPowerPercent,
  EndTargetPowerPercent,
}) => {
  const time = getTime(Start, End);
  const start = getPower(StartTargetPowerPercent);
  let asString;

  if (EndTargetPowerPercent) {
    asString = `Ramp ${start}-${getPower(EndTargetPowerPercent)} ${time}`;
  } else {
    asString = `${time} ${start}`;
  }

  return asString;
};

const combineSteps = (steps) => "- " + steps.join("%0D%0A- ");

module.exports = { parse, combineSteps };
