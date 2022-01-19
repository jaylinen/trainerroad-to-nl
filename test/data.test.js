const { convertData } = require("../src/data");
const mockData = require("./mock-data.js");

describe("data", () => {
  describe("convertData", () => {
    test("should return given data array as step list", () => {
      const result = convertData(mockData);
      const [, ...actualMockData] = mockData;

      expect(result.length).toEqual(actualMockData.length);
    });
  });
});
