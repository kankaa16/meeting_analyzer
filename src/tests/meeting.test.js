const request =
  require("supertest");

const app =
  require("../app");

describe(
  "Meeting Routes",
  () => {

    test(
      "GET /api/meetings without token",
      async () => {

        const res =
          await request(app)
            .get(
              "/api/meetings"
            );

        expect(
          res.statusCode
        ).toBe(401);

      }
    );

    test(
      "POST /api/meetings without token",
      async () => {

        const res =
          await request(app)
            .post(
              "/api/meetings"
            )
            .send({});

        expect(
          res.statusCode
        ).toBe(401);

      }
    );

    test(
      "GET /api/meetings/123 without token",
      async () => {

        const res =
          await request(app)
            .get(
              "/api/meetings/123"
            );

        expect(
          res.statusCode
        ).toBe(401);

      }
    );

    test(
      "POST /api/meetings/123/analyze without token",
      async () => {

        const res =
          await request(app)
            .post(
              "/api/meetings/123/analyze"
            );

        expect(
          res.statusCode
        ).toBe(401);

      }
    );

  }
);