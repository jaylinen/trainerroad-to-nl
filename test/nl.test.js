const { parse, combineSteps } = require("../src/nl");
const mockData = require("./mock-data.js");

describe("nl", () => {
  describe("parse", () => {
    test("should return string", () => {
      expect(typeof parse(mockData[0])).toBe("string");
    });

    test("should return data as a correct string", () => {
      expect(
        parse({
          Start: 100,
          End: 340,
          StartTargetPowerPercent: 110,
        })
      ).toBe("240s 110%");
    });

    test("should return ramp up data as a correct string", () => {
      expect(
        parse({
          Start: 1500,
          End: 1560,
          StartTargetPowerPercent: 65,
          EndTargetPowerPercent: 70,
        })
      ).toBe("Ramp 65%-70% 60s");
    });
  });

  describe("combineSteps", () => {
    test("should return given step list as combined string", () => {
      expect(combineSteps(["a", "b", "c"])).toBe("- a%0D%0A- b%0D%0A- c");
    });
  });
});
