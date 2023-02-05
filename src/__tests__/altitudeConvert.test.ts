import { altitudeConvert } from "../index";

test("altitude converter", () => {
  expect(Math.abs(altitudeConvert(800, 8000, 120))).toBeCloseTo(
    116.33898107783043
  );
});
