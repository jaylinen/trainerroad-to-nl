const convertData = (data) => {
  const workoutData = data.filter(({ Name }) => Name !== "Workout");

  const parsedSteps = workoutData.reduce((list, item, i, data) => {
    const previousItem = data[i - 1];
    const nextItem = data[i + 1];
    const firstItem = data[0];

    const parsedItem = { item };

    if (previousItem) {
      if (
        previousItem.StartTargetPowerPercent === item.StartTargetPowerPercent
      ) {
        if (nextItem) {
          parsedItem.EndTargetPowerPercent = nextItem.StartTargetPowerPercent;
        } else {
          parsedItem.EndTargetPowerPercent = firstItem.StartTargetPowerPercent;
        }
      }
    } else {
    }

    return [...list, parsedItem];
  }, []);

  return parsedSteps;
};

module.exports = { convertData };
