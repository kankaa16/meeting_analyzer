require("dotenv").config();

const app=require("./app");
const connect_db=require("./config/db");


const swaggerUi =
  require("swagger-ui-express");

const swaggerSpec =
  require("./config/swagger");

const PORT=process.env.PORT || 5000;

connect_db();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

require("./jobs/reminder_job");


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);