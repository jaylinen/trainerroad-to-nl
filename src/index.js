const { parse, combineSteps } = require("./nl");
const { convertData } = require("./data");
const { fetchData } = require("./api");

const download = (data, filename) => {
  const a = document.createElement("a");
  a.href = `data:text/plain,${data}`;
  a.setAttribute("download", filename);
  a.click();
};

fetchData().then(
  ({
    Workout: {
      intervalData,
      Details: { WorkoutName },
    },
  }) => {
    const convertedData = convertData(intervalData);

    const stepsAsNl = convertedData.map(parse);

    const stepsAsText = combineSteps(stepsAsNl);

    download(stepsAsText, `${WorkoutName}.txt`);
  }
);
