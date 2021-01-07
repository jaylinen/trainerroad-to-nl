const { parse } = require("../src/nl");

describe("nl", () => {
  test("should return string", () => {
    expect(
      typeof parse(
        (mockData = {
          Start: 0,
          End: 5400,
          StartTargetPowerPercent: 50,
        })
      )
    ).toBe("string");
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
});
