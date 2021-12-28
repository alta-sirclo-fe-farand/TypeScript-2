import { flattenArray } from "./problem4";

test("Test 1", () => {
  expect(flattenArray([1, [2, 3, null, 4], [null], 5])).toEqual([
    1, 2, 3, 4, 5,
  ]);
});
test("Test 2", () => {
  expect(
    flattenArray([[null, 3, null, 4, 5, null, null], 6, [7], [null, null, 8]])
  ).toEqual([3, 4, 5, 6, 7, 8]);
});
test("Test 3", () => {
  expect(
    flattenArray([[2, null, null], [4], [null, null, 6], [null, 8]])
  ).toEqual([2, 4, 6, 8]);
});
test("Test 4", () => {
  expect(
    flattenArray([
      [[[[[[[[[[[[[[[[[[[10]]]]]]]]]]]]]]]]]]],
      [[[null]], [null, [20]], null],
      [[null, [30]], null, [[[40]], null], [[[50, [[[60]]]]]]],
    ])
  ).toEqual([10, 20, 30, 40, 50, 60]);
});
