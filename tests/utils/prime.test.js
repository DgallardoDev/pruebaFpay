import { isPrime } from "../../src/utils/prime";

describe("prime function", () => {
  test("should be false", () => {
    expect(isPrime(4)).toBe(false);
  });
  test("should be true", () => {
    expect(isPrime(7)).toBe(true);
  });
});
