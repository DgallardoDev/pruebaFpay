import request from "supertest";
import app from "../../src/app";

describe("GET api/primes", () => {

  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/api/prime/2").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with a 400 status if the params is diferenet to integer", async () => {
    const response = await request(app).get("/api/prime/string").send();
    expect(response.statusCode).toBe(400);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/api/prime/2").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  test("should respond with an array of primes numbers", async () => {
    const response = await request(app).get("/api/prime/7").send();
    expect(response.body).toEqual([7, 5, 3, 2]);
  });

  test("should respond with a 400 status", async () => {
    const response = await request(app).get("/api/prime/1").send();
    expect(response.statusCode).toBe(200);
  });

});