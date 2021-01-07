const fetchData = () => {
  var url =
    "https://www.trainerroad.com/api/workoutdetails/" +
    document.location.href.split("/").pop().split("-")[0];

  return fetch(url, { credentials: "include" }).then((res) => res.json());
};

module.exports = { fetchData };
