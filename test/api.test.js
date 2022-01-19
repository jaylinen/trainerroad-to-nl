const { getWorkoutIdFromUrl } = require("../src/api");

describe("api", () => {
  describe("getWorkoutIdFromUrl", () => {
    test("should return workoutname when url given", () => {
      const url =
        "https://www.trainerroad.com/app/cycling/workouts/20679-shining-rock";
      expect(getWorkoutIdFromUrl(url)).toBe("20679");
    });
  });
});
