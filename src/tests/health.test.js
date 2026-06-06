const request =
  require("supertest");

const app =
  require("../app");

describe(
  "Health Route",
  () => {

    test(
      "GET /health",
      async () => {

        const res =
          await request(app)
            .get("/health");

        expect(
          res.statusCode
        ).toBe(200);

        expect(
          res.body.success
        ).toBe(true);

      }
    );

  }
);