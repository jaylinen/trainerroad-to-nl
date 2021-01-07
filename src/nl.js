const getTime = (start, end) => {
  const time = end - start;

  return `${time}s`;
};

const getPower = (start) => {
  return `${start}%`;
};

const parse = ({ Start, End, StartTargetPowerPercent }) => {
  const time = getTime(Start, End);
  const power = getPower(StartTargetPowerPercent);

  return `${time} ${power}`;
};

module.exports = { parse };
