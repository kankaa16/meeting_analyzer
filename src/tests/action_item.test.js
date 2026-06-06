const request =
  require("supertest");

const app =
  require("../app");

describe(
  "Action Item Routes",
  () => {

    test(
      "GET /api/action-items",
      async () => {

        const res =
          await request(app)
            .get(
              "/api/action-items"
            );

        expect(
          [200, 401]
        ).toContain(
          res.statusCode
        );

      }
    );

    test(
      "GET /api/action-items/overdue",
      async () => {

        const res =
          await request(app)
            .get(
              "/api/action-items/overdue"
            );

        expect(
          [200, 401]
        ).toContain(
          res.statusCode
        );

      }
    );

  }
);