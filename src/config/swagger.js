const swaggerJsdoc =
  require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title:
        "Hintro Backend Task :) ",

      version:
        "1.0.0",

      description:
        "Meeting Intelligence Platform API",
    },

    servers: [
      {
        url:
          "http://localhost:8000/api",
      },
    ],
  },

  apis: [
  "./src/routes/*.js",
],
};

const swaggerSpec =
  swaggerJsdoc(options);

module.exports =
  swaggerSpec;