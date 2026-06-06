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
      "https://meeting-analyzer-1hg4.onrender.com/api",
      }
    ],
      security: [
    {
      bearerAuth: [],
    },
  ],
    components: {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
    },
  },
},
  },

  apis: [
  "./src/routes/*.js",
],
};

const swaggerSpec =
  swaggerJsdoc(options);

module.exports =
  swaggerSpec;