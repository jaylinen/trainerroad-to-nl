const getWorkoutIdFromUrl = (url) => url.split("/").pop().split("-")[0];

const fetchData = () => {
  const url =
    "https://www.trainerroad.com/api/workoutdetails/" +
    getWorkoutIdFromUrl(document.location.href);

  const params = { credentials: "include" };

  return fetch(url, params).then((res) => res.json());
};

module.exports = { fetchData, getWorkoutIdFromUrl };
