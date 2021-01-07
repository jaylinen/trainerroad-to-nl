const { parse } = require("./nl");
const { fetchData } = require("./api");

const download = (dataurl, filename) => {
  const a = document.createElement("a");
  a.href = dataurl;
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
    const [, ...parsedSteps] = intervalData.map(parse);

    const stepList = "- " + parsedSteps.join("%0D%0A- ");

    download(`data:text/plain,${stepList}`, `${WorkoutName}.txt`);
  }
);
